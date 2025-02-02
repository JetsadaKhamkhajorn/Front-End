'use client'
import "../../assest/styles/Cantact.modul.css"
import React, { useEffect, useRef } from "react";
import { Input, Col, Row, Form, Button } from "antd";
import Image from '../../assest/image/Heros V4.png';

export default function ContactPage() {
    const mapRef = useRef(null);

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    useEffect(() => {
        const initMap = () => {
            const location = { lat: -37.8173137, lng: 144.9554312 }
            const map = new window.google.maps.Map(mapRef.current, {
                zoom: 15,
                center: location,
                disableDefaultUI: true,
                styles: [
                    {
                        featureType: "poi",
                        stylers: [{ visibility: "off" }], // ซ่อนจุดสนใจ เช่น ธุรกิจ ร้านอาหาร
                    },
                    {
                        featureType: "transit",
                        stylers: [{ visibility: "off" }], // ซ่อนเส้นทางขนส่งสาธารณะ
                    },
                ],
            });

            new window.google.maps.Marker({
                position: location,
                map: map,
            });
        };

        if (window.google && window.google.maps) {
            initMap();
        } else {
            const script = document.createElement("script");
            // script.src = `https://maps.googleapis.com/maps/api/js?key=KEY`;
            script.src = `https://www.google.com/maps/dir//jay+capital+advisory+limited/@13.7304047,100.5189753,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x30e29f34ed7b50cb:0x74ac38e09d930bcf!2m2!1d100.5601748!2d13.7303247?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D`;
            script.async = true;
            script.onload = initMap; https://ant.design/
            document.head.appendChild(script);
        }
    }, []);

    return (
        <div id="contactus">
            <div className="image-container">
                <img src={Image.src} alt="Image" />
            </div>

            <div className="map-container">
                <div ref={mapRef} id="map" />
            </div>

            <div className="title">
                <h1>Let’s Build Your Financial Future <br />Together</h1>
            </div>

            <div className="form-container">
                <Form onFinish={onFinish}>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item name="firstName">
                                <Input size="large" placeholder="First Name" allowClear />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item name="lastName">
                                <Input size="large" placeholder="Last Name" allowClear />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item name="email">
                                <Input size="large" placeholder="Email" allowClear />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item name="message">
                                <Input.TextArea size="large" placeholder="Message" allowClear />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item label={null}>
                                <Button type="primary" htmlType="submit" size="large">
                                    Send
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>
    )
}
