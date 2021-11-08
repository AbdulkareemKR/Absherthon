import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Axios from "axios";
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
  // const [review, setReview] = useState("");
  // const [movieReviewList, setMovieReviewList] = useState([]);

  // const submitReview = () => {
  //   Axios.post("https://crud-back-end-node.herokuapp.com/api/insert", {
  //     movieName: movieName,
  //     movieReview: review,
  //   });
  //   setMovieName("");
  //   setReview("");
  //   setMovieReviewList([
  //     ...movieReviewList,
  //     { name: movieName, review: review },
  //   ]);
  // };

  const handleChange = (e) => {
    setClientForm({
      ...clientForm,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  // const updateReview = (movie) => {
  //   Axios.put("https://crud-back-end-node.herokuapp.com/api/update", {
  //     movieName: movie,
  //     movieReview: newReview,
  //   });
  //   setNewReview("");
  // };

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
                  label="متزوج/ة"
                  name="martialStatus"
                  type="radio"
                  id="inline-radio-1"
                  onChange={handleChange}
                />
                <Form.Check
                  inline
                  label="غير متزوج/ة"
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
                  inline
                  label="ذكر"
                  name="gender"
                  type="radio"
                  id="inline-radio-1"
                  onChange={handleChange}
                />
                <Form.Check
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
                  inline
                  label="نعم"
                  name="verified"
                  type="radio"
                  id="inline-radio-1"
                  onChange={handleChange}
                />
                <Form.Check
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
          </Modal.Body>
          <Modal.Footer className={styles.footer}>
            <Button
              className={`${styles.createButton} ${styles.submit}`}
              type="submit"
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
