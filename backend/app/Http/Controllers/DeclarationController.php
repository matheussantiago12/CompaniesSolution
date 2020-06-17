<?php

namespace App\Http\Controllers;

use App\Repositories\DeclarationRepository;
use Illuminate\Http\Request;

class DeclarationController extends Controller
{
    private $declarationRepository;

    public function __construct(DeclarationRepository $declarationRepository)
    {
        $this->declarationRepository = $declarationRepository;
    }

    public function getAll()
    {
        //$companies = $this->companyRepository->all();

        //return response()->json($companies);
    }

    public function upload(Request $request)
    {
        $response = $this->declarationRepository->upload($request);

        return response()->json($response);
    }

    public function get($id)
    {
        $declaration = $this->declarationRepository->findByCompanyId($id);

        return response()->json($declaration);
    }

    public function store(Request $request)
    {
        $post = $this->model->create($request->all());

        return response()->json($post);
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
