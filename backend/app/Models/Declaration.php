<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Declaration extends Model
{
    protected $table = 'declarations';

    public function format()
    {
        return [
            'declaration_id'    => $this->declaration_id,
            'date'              => $this->date,
            'type'              => $this->type,
            'company_id'        => $this->company_id
        ];
    }

    protected $fillable = [
        'date',
        'type',
        'company_id'
    ];

    public $timestamps = false;
}
