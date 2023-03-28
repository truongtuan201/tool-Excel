<?php
require 'vendor/autoload.php';

use PhpOffice\PhpSpreadsheet\IOFactory;

function import()
{
    $spreadsheet = IOFactory::load('./file_excel/file.xlsx');
    $worksheet = $spreadsheet->getActiveSheet();
    $data = $worksheet->toArray(null, true, true, true);
    $data = array_slice($data, 1);
    $arrJP = [];
    $arrEN = [];
    foreach ($data as $row) {
        $arrJP[$row['A']] = $row['B'];
        $arrEN[$row['A']] = $row['C'];
    }
    $newNewArray = array_reduce(array_keys($arrJP), function ($result, $key) use ($arrJP) {
        if (preg_match('/^(.+?)__(\d+)$/', $key, $matches)) {
            $newKey = $matches[1];
            $index = $matches[2];
            if (!isset($result[$newKey])) {
                $result[$newKey] = [];
            }
            $result[$newKey][$index] = $arrJP[$key];
        } else {
            $result[$key] = $arrJP[$key];
        }
        return $result;
    }, []);
    $newNewArrayEn = array_reduce(array_keys($arrEN), function ($result, $key) use ($arrEN) {
        if (preg_match('/^(.+?)__(\d+)$/', $key, $matches)) {
            $newKey = $matches[1];
            $index = $matches[2];
            if (!isset($result[$newKey])) {
                $result[$newKey] = [];
            }
            $result[$newKey][$index] = $arrEN[$key];
        } else {
            $result[$key] = $arrEN[$key];
        }
        return $result;
    }, []);
    $newData = array();
    foreach ($newNewArray as $key => $value) {
        $keys = explode("__", $key);
        $lastKey = array_pop($keys);
        $currentArray = &$newData;
        foreach ($keys as $k) {
            if (!isset($currentArray[$k])) {
                $currentArray[$k] = array();
            }
            $currentArray = &$currentArray[$k];
        }
        $currentArray[$lastKey] = $value;
    }
    $newDataEn = array();
    foreach ($newNewArrayEn as $key => $value) {
        $keys = explode("__", $key);
        $lastKey = array_pop($keys);
        $currentArray = &$newDataEn;
        foreach ($keys as $k) {
            if (!isset($currentArray[$k])) {
                $currentArray[$k] = array();
            }
            $currentArray = &$currentArray[$k];
        }
        $currentArray[$lastKey] = $value;
    }
    $jsonString = json_encode($newData, JSON_UNESCAPED_UNICODE);
    $file = fopen('./file_import/jp' . '.ts', 'w');
    fwrite($file, "export default $jsonString;");
    fclose($file);
    unset($arrNew);
    $jsonString = json_encode($newDataEn, JSON_UNESCAPED_UNICODE);
    $file = fopen('./file_import/en' . '.ts', 'w');
    fwrite($file, "export default $jsonString;");
    fclose($file);
    unset($arrNew);
}
import();
