import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Fade } from "react-awesome-reveal";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import "../App.css";
import Spinner from "react-bootstrap/Spinner";
import styles from "./main.module.css";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Row, Form } from "react-bootstrap";
import { FaIdCard } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { HiTag } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { AiFillUnlock } from "react-icons/ai";
import Container from "react-bootstrap/Container";
import NumericInput from "react-numeric-input";

function Registration() {
  const [movieName, setMovieName] = useState("");
  const [review, setReview] = useState("");
  const [movieReviewList, setMovieReviewList] = useState([]);
  const [newReview, setNewReview] = useState("");
  const [edit, setEdit] = useState(false);

  const submitReview = () => {
    Axios.post("https://crud-back-end-node.herokuapp.com/api/insert", {
      movieName: movieName,
      movieReview: review,
    });
    setMovieName("");
    setReview("");
    setMovieReviewList([
      ...movieReviewList,
      { name: movieName, review: review },
    ]);
  };

  // const updateReview = (movie) => {
  //   Axios.put("https://crud-back-end-node.herokuapp.com/api/update", {
  //     movieName: movie,
  //     movieReview: newReview,
  //   });
  //   setNewReview("");
  // };

  return (
    <div>
      <div>
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
                    <FaIdCard className={styles.icons} /> الاسم
                  </Form.Label>
                  <Col>
                    <Form.Control
                      required
                      className={styles.input}
                      type="number"
                      placeholder="أدخل اسمك"
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className={styles.group}>
                  <Form.Label className={styles.label} column sm="4">
                    <MdEmail className={styles.icons} /> الايميل
                  </Form.Label>
                  <Col>
                    <Form.Control
                      required
                      className={styles.input}
                      type="email"
                      placeholder="أدخل ايميلك"
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className={styles.group}>
                  <Form.Label className={styles.label} column sm="4">
                    <AiFillUnlock className={styles.icons} /> كلمة المرور
                  </Form.Label>
                  <Col>
                    <Form.Control
                      required
                      className={styles.input}
                      type="password"
                      placeholder="أدخل كلمة المرور"
                    />
                  </Col>
                </Form.Group>
                <div>
                  <Form.Group as={Row} className={styles.group}>
                    <Form.Label className={styles.label} column sm="4">
                      <AiFillUnlock className={styles.icons} />
                      تأكيد كلمة المرور
                    </Form.Label>
                    <Col>
                      <Form.Control
                        required
                        className={styles.input}
                        type="password"
                        placeholder="أعد ادخال كلمة المرور"
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className={styles.group}>
                    <Form.Label className={styles.label} column sm="4">
                      <HiTag className={styles.icons} /> المرحلة الدراسية
                    </Form.Label>
                    <Col>
                      <Form.Control as="select" className={styles.input}>
                        <option>دون الابتدائي</option>
                        <option>ابتدائي</option>
                        <option>متوسط</option>
                        <option>ثانوي</option>
                        <option>جامعي</option>
                        <option>أب</option>
                      </Form.Control>
                    </Col>
                  </Form.Group>
                </div>
              </Modal.Body>
              <Modal.Footer className={styles.footer}>
                <Button
                  className={`${styles.createButton} ${styles.submit}`}
                  type="submit"
                >
                  أنشئ الحساب
                </Button>
              </Modal.Footer>
            </Container>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Registration;
