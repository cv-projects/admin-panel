import React, {useEffect, useState} from 'react';
import {Link, useNavigate, Navigate} from "react-router-dom";
import Layouts from "../../../Components/Layouts";
import {Col, Container, Row} from "react-bootstrap";
import {useProductStateContext} from "../../../Contexts/Product/ProductContextProvider";
import axios from "axios";

const CreateCategory = () => {

    const {productCategories,handleCreateCategory} = useProductStateContext();

    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [parent, setParent] = useState(0);
    const [status, setStatus] = useState(1);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const catData = {title, parent, status};
        handleCreateCategory(catData);
    }

    return (
        <Layouts>
            <Container fluid={true}>
                <Row>
                    <Col xs={12}>
                        <strong className="page--title">
                            ایجاد دسته بندی
                        </strong>
                    </Col>
                </Row>
                <Row>
                    <Col sx={12}>
                        <div className="table--container">
                            <section className="app__content--body mt-3">
                                <div className="d-flex w-100 justify-content-between align-items-center">
                                    <strong className="page--title mb-4 d-block">
                                        ایجاد دسته بندی
                                    </strong>

                                    <Link to="/market/category" className="btn--custom">بازگشت</Link>
                                </div>

                                <div className="admin">

                                    <form action=""
                                          onSubmit={handleSubmit}
                                          className="admin--form"
                                          id="form" encType="multipart/form-data">

                                        <div className="form--group">
                                            <label htmlFor="name" className="form--label">نام دسته بندی</label>
                                            <div className="input--wrapper">
                                                <input type="text"
                                                       value={title}
                                                       onChange={(e) => setTitle(e.target.value)}
                                                       className="form--control"
                                                       placeholder="نام دسته را وارد کنید"/>
                                            </div>

                                        </div>
                                        <div className="form--group">
                                            <label htmlFor="status" className="form--label">دسته والد</label>
                                            <div className="input--wrapper">
                                                <select
                                                    value={parent}
                                                    onChange={(e) => setParent(parseInt(e.target.value))}
                                                    className="form--control">
                                                    <option value={null}>دسته اصلی</option>
                                                    {productCategories && productCategories.map(cat => {
                                                        return (
                                                            <option key={cat.id} value={cat.id} >{cat.title}</option>
                                                        )
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form--group">
                                            <label htmlFor="status" className="form--label">وضعیت</label>
                                            <div className="input--wrapper">
                                                <select
                                                    value={status}
                                                    onChange={(e) => setStatus(e.target.value)}
                                                    className="form--control">
                                                    <option value="0">غیر فعال</option>
                                                    <option value="1">فعال</option>
                                                </select>
                                            </div>
                                        </div>


                                        <section className="col-12 mt-3 d-flex justify-content-end">
                                            <button className="btn--custom">ذخیره</button>
                                        </section>
                                    </form>

                                </div>

                            </section>
                        </div>
                    </Col>


                </Row>
            </Container>


        </Layouts>
    );
};

export default CreateCategory;