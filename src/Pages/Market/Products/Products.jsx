import React from 'react';
import './products.scss';
import Layouts from "../../../Components/Layouts";
import {Col, Container, Dropdown, Row, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import {PenIcon, TrashIcon} from "../../../Components/Icons/Icons";

const Products = () => {
    return (
        <Layouts>
            <Container fluid={true}>
                <Row>
                    <Col xs={12}>
                        <strong className="page--title">
                            محصولات
                        </strong>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="table--container">
                            <div className="d-flex w-100 justify-content-between align-items-center mb-3 pt-2">

                                <div className="dataTables--length">
                                    <label className="d-flex align-items-center gap-2">
                                        نمایش
                                        <select
                                            className="pagination--select form-control form-control-sm">
                                            <option value="5">5</option>
                                            <option value="10">10</option>
                                            <option value="25">25</option>
                                            <option value="50">50</option>
                                            <option value="100">100</option>
                                        </select>
                                        رکورد
                                    </label>
                                </div>

                                <Link to="/admin/category/create" className="btn--custom">افزودن دسته بندی</Link>
                            </div>
                            <div className="table-responsive">
                                <Table className="text-center">
                                    <thead>
                                    <tr>
                                        <th className="text-right">کد دسته بندی</th>
                                        <th>عنوان دسته بندی</th>
                                        <th>دسته والد</th>
                                        <th>وضعیت دسته بندی</th>
                                        <th>عملیات</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className="text-right">1</td>
                                        <td></td>
                                        <td>
                                            دسته اصلی
                                        </td>
                                        <td>

                                        </td>
                                        <td>
                                            <div className="d-flex w-100 justify-content-center">
                                                <Dropdown>
                                                    <Dropdown.Toggle className="btn--custom text-center"
                                                                     id="dropdown-basic">
                                                        عملیات
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item>
                                                            <PenIcon/>
                                                            <span className="action--name">ویرایش</span>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                          <TrashIcon/>
                                                            <span className="action--name">حذف</span>
                                                        </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </td>
                                    </tr>

                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Layouts>
    );
};

export default Products;