<?php

namespace App\Http\Controllers;

use App\Exceptions\CoinbaseServiceException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\Trades as TradeModel;
use Illuminate\Http\Response;
use Faker\Factory;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Config;

/**
 * Class Trades
 * @package App\Http\Controllers
 */
class Trades extends Controller
{

    /**
     * Display the specified resource by Id.
     * @param string $id
     * @return Response|JsonResponse
     */
    public function getTradeById(string $id): Response|JsonResponse
    {
        if (TradeModel::where('id', $id)->exists()) {
            $trade = TradeModel::where('id', $id)->first();

            return response()->json($trade);
        }

        return response(null, 204);
    }

    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        return response()->json(TradeModel::all());
    }

    /**
     * Create a new resource.
     *
     * @param Request $request
     * @return Response
     * @throws CoinbaseServiceException
     */
    public function create(Request $request): response
    {
        $trade = new TradeModel;

        $validator = Validator::make($request->all(), $trade->rules);
        if ($validator->fails()) {
            return response($validator->errors()->toJson());
        }

        $coinBaseUrl = Config::get('services.coinbase.url');
        if (is_null($coinBaseUrl)) {
            return response(null, 500);
        }

        $response = Http::get($coinBaseUrl);

        $response = $response->json();
        if (!isset($response['price']) || is_null($response['price'])) {
            throw new CoinbaseServiceException('CoinBase returned invalid parameter');
        }

        $BTCMarketPrice = floatval($response['price']);
        $amountInUSD = $request['amount'];
        $amountInBTC = $amountInUSD / $BTCMarketPrice;
        $amountInSTS = number_format($amountInBTC, 8);

        $faker = Factory::create();
        $cardName = $faker->boolean() ? 'Amazon' : 'iTunes';
        $trade->user_name = $faker->userName;
        $trade->first_name = $faker->firstName;
        $trade->positive_reputation = $faker->numberBetween(0, 50);
        $trade->negative_reputation = $faker->numberBetween(0, 50);
        $trade->gift_card_name = "{$cardName} gift card";
        $trade->status = $faker->boolean();
        $trade->rate = $BTCMarketPrice;
        $trade->amount = $amountInSTS;
        $trade->save();

        return response(null, 201);
    }

}
