<?php
require 'vendor/autoload.php';

use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

function export()
{
    $dataJp = file_get_contents('./ja.json');
    $dataEn = file_get_contents('./en.json');
    $dataJpArr = json_decode($dataJp, true);
    $dataEnArr = json_decode($dataEn, true);
    $newArrJp = array();
    $newArrEn = array();
    function flattenArray($array, $prefix = '')
    {
        $result = [];
        foreach ($array as $key => $val) {
            if (is_array($val)) {
                $result = array_merge(
                    $result,
                    flattenArray($val, $prefix . $key . '__')
                );
            } else {
                $result[$prefix . $key] = $val;
            }
        }
        return $result;
    }

    $newArrJp = flattenArray($dataJpArr);
    $newArrEn = flattenArray($dataEnArr);

    $spreadsheet = new Spreadsheet();
    $sheet = $spreadsheet->getActiveSheet();
    $sheet->setCellValue('A1', 'Key');
    $sheet->setCellValue('B1', 'JP');
    $sheet->setCellValue('C1', 'EN');

    $row = 2;
    $keys = [];

    foreach ($newArrJp as $key => $val) {
        $sheet->setCellValue('A' . $row, $key);
        $sheet->setCellValue('B' . $row, $val);
        $keys[] = $key;

        foreach ($newArrEn as $eKey => $eVal) {
            if ($key == $eKey) {
                $sheet->setCellValue('C' . $row, $eVal);
                break;
            }
        }

        $row++;
    }
    $writer = new Xlsx($spreadsheet);
    $writer->save('./file_excel/file.xlsx');
}
export();
