<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    protected $table = 'companies';

    public function format()
    {
        return [
            'id'           => $this->id,
            'name'         => $this->name,
            'score'        => $this->score,
            'created_at'   => $this->created_at
        ];
    }

    protected $fillable = [
        'name'
    ];

    public $timestamps = true;
}
