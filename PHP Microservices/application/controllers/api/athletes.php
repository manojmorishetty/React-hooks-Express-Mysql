<?php
   
require APPPATH . 'libraries/REST_Controller.php';
     
class Athlete extends REST_Controller {

    public function getSingleAthlete($id){
        $url="localhost:9000/api/athletes/$id";
        $client=curl_init($url);
        curl_setopt($client,CURLOPT_RETURNTRANSFER,1);
        $res=curl_exec($client);
        echo $res;
    }
    
    public function getALLAthletes(){
        $url="localhost:9000/api/athletes";
        $client=curl_init($url);
        curl_setopt($client,CURLOPT_RETURNTRANSFER,1);
        $res=curl_exec($client);
        echo $res;
    }

    public function deleteAthlete($id){
        $url="localhost:9000/api/athletes/$id";
        $client=curl_init($url);
        curl_setopt($client,CURLOPT_DELETE,$file);
        $res=curl_exec($client);
        echo $res;
    }

    public function uploadAthlete($file){
        $url="localhost:9000/api/uploadathletes";
        $client=curl_init($url);
        curl_setopt($client,CURLOPT_POST,$file);
        $res=curl_exec($client);
        echo $res;
    }
    	
}