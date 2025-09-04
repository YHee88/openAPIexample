import { Button, Card, Image } from "react-bootstrap"


const{kakao}=window;

const mapViewer=(mapLat, mapLot)=>{
    if(mapLat==="0" && mapLot ==="0"){
        alert("위치정보가 없습니다");
        return;
    }
    const mapContainer=document.getElementById("map"),
    mapOption={
        center:new kakao.maps.LatLng(mapLat, mapLot),
        level:3
    };

    const map= new kakao.maps.Map(mapContainer, mapOption);

    const marker = new kakao.maps.Marker({
        position:map.getCenter()
    });

    marker.setMap(map);
};




const GyeongnamTourcultureItem =({data_Title, category_name1, category_name2, telno, user_address, data_content, fileurl1, fileurl2, fileurl3, lattitude, logitude}) =>{
    return(
        <Card className="mb-3">
            <Card.Header as="h5">{data_Title}</Card.Header>
            <Card.Body>
                <Card.Text className="text-end">
                    <span className="font-size">{category_name1}{">"}{category_name2}</span>
                </Card.Text>
                <Card.Text>
                    {telno !==''&& `☎${telno}`} <br/>
                    {`🏟${user_address}`}
                </Card.Text>
                <Card.Text>
                    {data_content}

                </Card.Text>
                <Card.Text>
                    {fileurl1 !== "" && <Image alt={category_name1} src={fileurl1} thumbnail className='fileurl'/>}
                    {fileurl2 !== "" && <Image alt={category_name1} src={fileurl2} thumbnail className='fileurl'/>}
                    {fileurl3 !== "" && <Image alt={category_name1} src={fileurl3} thumbnail className='fileurl'/>}
                </Card.Text>
                <Button
                variant="primary"
                onClick={()=>mapViewer(lattitude, logitude)}>
                    지도로 보기
                    </Button>
            </Card.Body>

        </Card>
    )
}

export default GyeongnamTourcultureItem;