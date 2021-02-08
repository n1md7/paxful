<?php

namespace Database\Factories;

use App\Models\Trades;
use Illuminate\Database\Eloquent\Factories\Factory;

class TradesFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Trades::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition(): array
    {
        $cardName = $this->faker->boolean() ? 'Amazon' : 'iTunes';
        $BTCMarketPrice = $this->faker->numberBetween(30000, 45000);
        $amountInUSD = $this->faker->numberBetween(1, 1000);
        $amountInBTC = $amountInUSD / $BTCMarketPrice;
        $amountInSTS = number_format($amountInBTC, 8);

        return [
            'user_name' => $this->faker->userName,
            'first_name' => $this->faker->firstName,
            'positive_reputation' => $this->faker->numberBetween(0, 50),
            'negative_reputation' => $this->faker->numberBetween(0, 50),
            'gift_card_name' => "{$cardName} gift card",
            'status' => $this->faker->boolean,
            'rate' => $BTCMarketPrice,
            'amount' => $amountInSTS,
        ];
    }
}
