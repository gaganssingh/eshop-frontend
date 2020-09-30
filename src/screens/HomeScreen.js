import React from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";

import STORE from "../STORE";

const HomeScreen = () => {
    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {STORE.map((product) => (
                    <Col sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default HomeScreen;
