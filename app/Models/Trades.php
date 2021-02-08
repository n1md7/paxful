<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

/**
 * @property string user_name
 * @property string first_name
 * @property int positive_reputation
 * @property int negative_reputation
 * @property string gift_card_name
 * @property bool status
 * @property float rate
 * @property float amount
 *
 * @property array rules
 * @mixin Builder
 */
class Trades extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'trades';
    protected $fillable = [
        'user_name',
        'first_name',
        'positive_reputation',
        'negative_reputation',
        'gift_card_name',
        'status',
        'rate',
        'amount'
    ];
    protected $hidden = [
        'updated_at'
    ];

    public $rules = [
        'amount' => 'required|integer'
    ];

}
