import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import "../App.css";
import styles from "./main.module.css";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Row, Form } from "react-bootstrap";
import { FaIdCard } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import Container from "react-bootstrap/Container";

function Registration() {
  const clientData = Object.freeze({
    calls: "",
    written: "",
    age: "",
    gender: "",
    martialStatus: "",
    verified: "",
    sessionCount: "",
    paidCount: "",
    price: "",
    problem: "",
  });
  const [clientForm, setClientForm] = useState(clientData);
  const [result, setResult] = useState("");

  const submitReview = (e) => {
    e.preventDefault();
    Axios.post("https://absherthon.herokuapp.com/api/main", {
      calls: clientForm.calls,
      written: clientForm.written,
      age: clientForm.age,
      gender: clientForm.gender,
      martialStatus: clientForm.martialStatus,
      verified: clientForm.verified,
      sessionCount: clientForm.sessionCount,
      paidCount: clientForm.paidCount,
      price: clientForm.price,
      problem: clientForm.problem,
    });
  };

  const getResult = () => {
    Axios.get("https://absherthon.herokuapp.com/api/get").then((response) => {
      setResult(response.data);
    });
  };

  const handleChange = (e) => {
    setClientForm({
      ...clientForm,
      // Trimming any whitepace
      [e.target.name]: e.target.value.trim(),
    });
  };

  return (
    <div className={styles.containter}>
      <Modal.Header className={styles.title}>
        <Modal.Title
          className={styles.title}
          id="contained-modal-title-vcenter"
        >
          استعلام
          <BsFillPeopleFill className={styles.icons} />
        </Modal.Title>
      </Modal.Header>
      <Form className={styles.formStyle}>
        <Container fluid style={{ margin: "auto" }}>
          <Modal.Body className="show-grid">
            <Form.Group as={Row} className={styles.group}>
              <Form.Label className={styles.label} column sm="4">
                <FaIdCard className={styles.icons} /> عدد الاستشارات الهاتفية
              </Form.Label>
              <Col>
                <Form.Control
                  name="calls"
                  required
                  className={styles.input}
                  type="number"
                  placeholder="أدخل رقما"
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className={styles.group}>
              <Form.Label className={styles.label} column sm="4">
                <FaIdCard className={styles.icons} /> عدد الاستشارات الكتابية
              </Form.Label>
              <Col>
                <Form.Control
                  name="written"
                  required
                  className={styles.input}
                  type="number"
                  placeholder="أدخل رقما"
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className={styles.group}>
              <Form.Label className={styles.label} column sm="4">
                <FaIdCard className={styles.icons} /> العمر
              </Form.Label>
              <Col>
                <Form.Control
                  name="age"
                  required
                  className={styles.input}
                  type="number"
                  placeholder="أدخل رقما"
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className={styles.group}>
              <Form.Label className={styles.label} column sm="4">
                <FaIdCard className={styles.icons} /> الحالة الاجتماعية
              </Form.Label>
              <Col>
                <Form.Check
                  inline
                  label="أعزب/عزباء"
                  value={"أعزب/عزباء"}
                  name="martialStatus"
                  type="radio"
                  id="inline-radio-1"
                  onChange={handleChange}
                />
                <Form.Check
                  inline
                  label="متزوج/ة"
                  name="martialStatus"
                  value={"متزوج/ة"}
                  type="radio"
                  id="inline-radio-1"
                  onChange={handleChange}
                />
                <Form.Check
                  inline
                  label="مطلق/ة"
                  value={"مطلق/ة"}
                  name="martialStatus"
                  type="radio"
                  id="inline-radio-1"
                  onChange={handleChange}
                />
                <Form.Check
                  inline
                  label="أرمل/ة"
                  value={"أرمل/ة"}
                  name="martialStatus"
                  type="radio"
                  id="inline-radio-1"
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className={styles.group}>
              <Form.Label className={styles.label} column sm="4">
                <FaIdCard className={styles.icons} /> الجنس
              </Form.Label>
              <Col>
                <Form.Check
                  value={"male"}
                  inline
                  label="ذكر"
                  name="gender"
                  type="radio"
                  id="inline-radio-1"
                  onChange={handleChange}
                />
                <Form.Check
                  value={"female"}
                  inline
                  label="أنثى"
                  name="gender"
                  type="radio"
                  id="inline-radio-1"
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className={styles.group}>
              <Form.Label className={styles.label} column sm="4">
                <FaIdCard className={styles.icons} /> هل تم تفعيل الحساب؟
              </Form.Label>
              <Col>
                <Form.Check
                  value={"True"}
                  inline
                  label="نعم"
                  name="verified"
                  type="radio"
                  id="inline-radio-1"
                  onChange={handleChange}
                />
                <Form.Check
                  value={"False"}
                  inline
                  label="لا"
                  name="verified"
                  type="radio"
                  id="inline-radio-1"
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className={styles.group}>
              <Form.Label className={styles.label} column sm="4">
                <FaIdCard className={styles.icons} /> عدد الجلسات التي أخذها
              </Form.Label>
              <Col>
                <Form.Control
                  name="sessionCount"
                  required
                  className={styles.input}
                  type="number"
                  placeholder="أدخل رقما"
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className={styles.group}>
              <Form.Label className={styles.label} column sm="4">
                <FaIdCard className={styles.icons} /> مجموع الجلسات المدفوعة
              </Form.Label>
              <Col>
                <Form.Control
                  name="paidCount"
                  required
                  className={styles.input}
                  type="number"
                  placeholder="أدخل رقما"
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className={styles.group}>
              <Form.Label className={styles.label} column sm="4">
                <FaIdCard className={styles.icons} /> مجموع كل المبالغ التي
                دفعها
              </Form.Label>
              <Col>
                <Form.Control
                  name="price"
                  required
                  className={styles.input}
                  type="number"
                  placeholder="أدخل قيمة المبلغ"
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className={styles.group}>
              <Form.Label className={styles.label} column sm="4">
                <FaIdCard className={styles.icons} /> مشكلة تعرض لها المستخدم
              </Form.Label>
              <Col>
                <Form.Control
                  name="problem"
                  required
                  className={styles.input}
                  type="text"
                  placeholder="اكتب تفاصيل المشكلة"
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <div className={styles.result}>{result}</div>
          </Modal.Body>
          <Modal.Footer className={styles.footer}>
            <Button
              className={`${styles.createButton} ${styles.submit}`}
              type="submit"
              onClick={(e) => {
                submitReview(e);
                getResult();
              }}
            >
              بحث
            </Button>
          </Modal.Footer>
        </Container>
      </Form>
      {console.log(clientForm)}
    </div>
  );
}

export default Registration;
