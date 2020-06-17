<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Repositories\CompanyRepository;
use Illuminate\Http\Request;

class CompanyController extends Controller
{
    private $companyRepository;

    public function __construct(CompanyRepository $companyRepository)
    {
        $this->companyRepository = $companyRepository;
    }

    public function getAll()
    {
        $companies = $this->companyRepository->all();

        return response()->json($companies);
    }

    public function get($id)
    {
        $company = $this->companyRepository->findById($id);

        return response()->json($company);
    }

    public function store(Request $request)
    {
        $company = $this->companyRepository->store($request);

        return response()->json($company);
    }

    public function update($id, Request $request)
    {
        $company = $this->companyRepository->update($id, $request);

        return response()->json($company);
    }

    public function destroy($id)
    {
        $post = $this->model->find($id);
        $post->delete();

        return response()->json(null);
    }
}
