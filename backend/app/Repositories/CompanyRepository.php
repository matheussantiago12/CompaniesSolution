<?php

namespace App\Repositories;

use App\Models\Company;
use Illuminate\Http\Request;

class CompanyRepository
{
    public function all()
    {
        return Company::orderBy('score', 'desc')
            ->get()
            ->map
            ->format();
    }

    public function findById($id)
    {
        return Company::where('id', $id)
            ->firstOrFail()
            ->format();
    }

    public function store(Request $request)
    {
        $company = new Company();
        $company->name = $request->name;
        $company->score = $request->score;
        $company->save();

        return $company;
    }
}
