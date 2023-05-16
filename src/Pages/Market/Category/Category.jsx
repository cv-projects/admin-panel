import React from 'react';
import {Col, Container, Dropdown, Row, Table} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {PenIcon, TrashIcon} from "../../../Components/Icons/Icons";
import Layouts from "../../../Components/Layouts";
import {useProductStateContext} from "../../../Contexts/Product/ProductContextProvider";

const Category = () => {

    const {productCategories,handleEditProductCategory,productCategoryRemove} = useProductStateContext();
    const navigate = useNavigate();

    const getCatData = (idCat) => {
        // console.log(productCategories.find(cat => cat.id === idCat))
        return productCategories.find(cat => cat.id === idCat);
    }

    const LoadEdit = (cat) => {
        handleEditProductCategory(cat);
        navigate(`/market/category/edit/${cat.id}`);
    }
    const handleRemove = (cat) => {
        productCategoryRemove(cat);
    }

    return (
        <Layouts>

            <Container fluid={true}>
                <Row>
                    <Col xs={12}>
                        <strong className="page--title">
                            دسته بندی محصولات
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

                                <Link to="/market/category/create" className="btn--custom">افزودن دسته بندی</Link>
                            </div>
                            <div className="table-responsive">
                                <Table className="">
                                    <thead>
                                    <tr>
                                        <th className="text-right">کد دسته بندی</th>
                                        <th>عنوان دسته بندی</th>
                                        <th>دسته والد</th>
                                        <th className="text-center">وضعیت دسته بندی</th>
                                        <th className="text-center">عملیات</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {productCategories && productCategories.map(cat => (
                                        <tr key={cat.id}>
                                            <td className="text-right">{cat.id}</td>
                                            <td>
                                                {cat.title}
                                            </td>
                                            <td>
                                                {(productCategories !== null && (cat.parent !== null && cat.parent !== 0)) ? (getCatData(cat.parent).title) : 'دسته اصلی'}
                                            </td>
                                            <td className="text-center">
                                                {cat.status ? 'فعال' : 'غیر فعال'}
                                            </td>
                                            <td>
                                                <div className="d-flex w-100 justify-content-center">
                                                    <Dropdown>
                                                        <Dropdown.Toggle className="btn--custom text-center"
                                                                         id="dropdown-basic">
                                                            عملیات
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu>
                                                            <Dropdown.Item onClick={() => LoadEdit(cat)}>
                                                                <PenIcon/>
                                                                <span className="action--name">ویرایش</span>
                                                            </Dropdown.Item>
                                                            <Dropdown.Item onClick={()=>handleRemove(cat)}>
                                                                <TrashIcon/>
                                                                <span className="action--name">حذف</span>
                                                            </Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}

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

export default Category;