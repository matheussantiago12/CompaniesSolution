<?php

namespace App\Repositories;

use App\Models\Declaration;
use App\Models\Company;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class DeclarationRepository
{
    public function all()
    {
        return Declaration::all();
    }

    public function findByCompanyId($id)
    {
        return Declaration::where('company_id', $id)
            ->orderBy('date')
            ->orderBy('declarations_id')
            ->get();
    }

    public function upload(Request $request)
    {
        $file = $request->file('declaration');
        $path = $file->storeAs('csv_declarations', Str::random(40) . '.' . $file->getClientOriginalExtension());
        $completePath = storage_path('app/' . $path);

        $declarationData = $this->csvToArray($completePath);
        $column = array_column($declarationData, 'type');
        array_multisort($column, SORT_ASC, SORT_NUMERIC, $declarationData);

        foreach($declarationData as $index => $row) {
            $declaration = new Declaration();

            $declaration->date       = $row['date'];
            $declaration->type       = $row['type'];
            $declaration->company_id = $row['company_id'];

            $declaration->save();

            $company = new Company();

            $company = $company->where('id', $row['company_id'])->first();

            if ($row['type'] == 0) {
                $company->score *= 1.02;
                if ($company->score > 100)
                    $company->score = 100;
            } else if ($row['type'] == 1) {
                $company->score *= 0.96;
                if ($company->score < 1)
                    $company->score = 1;
            }
            $score = $company->score;
            $company->save();
        }

        return $score;
    }

    private function csvToArray($filename = '', $delimiter = ',')
    {
        if (!file_exists($filename) || !is_readable($filename))
            return false;

        $header = null;
        $data = array();
        if (($handle = fopen($filename, 'r')) !== false)
        {
            while (($row = fgetcsv($handle, 1000, $delimiter)) !== false)
            {
                if (!$header)
                    $header = $row;
                else
                    $data[] = array_combine($header, $row);
            }
            fclose($handle);
        }

        return $data;
    }
}
