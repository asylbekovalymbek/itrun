import React, { useEffect, useMemo, useState } from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";

import { useParams } from "react-router-dom";
import { getOneData } from "../assets/data/blogData";
import Helmet from "../components/Helmet/Helmet";
import { Link } from "react-router-dom";

import commentImg from "../assets/all-images/ava-1.jpg";

import "../styles/blog-details.css";

const BlogDetails = () => {
  const { slug } = useParams();
  const [blogList, setBlogList] = useState([]);
  useEffect(() => {
    getOneData(slug).then((res) => {
      setBlogList(res);
    });
    window.scrollTo(0, 0);
  }, []);
  const blog = useMemo(() => {
    return blogList.find((blog) => blog.title === slug) ?? {};
  }, [blogList]);

  return (
    <Helmet title={blog.title}>
      <section>
        <Container>
          <Row>
            <Col lg="8" md="8">
              <div className="blog__details">
                <img src={blog.imgUrl} alt="" className="w-100" />
                <h2 className="section__title mt-4">{blog.title}</h2>

                <div className="blog__publisher d-flex align-items-center gap-4 mb-4">
                  <span className="blog__author">
                    <i class="ri-user-line"></i> {blog.author}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i class="ri-calendar-line"></i> {blog.date}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i class="ri-time-line"></i> {blog.time}
                  </span>
                </div>

                <p className="section__description">{blog.description}</p>
                <h6 className="ps-5 fw-normal">
                  <blockquote className="fs-4">{blog.quote}</blockquote>
                </h6>
                <p className="section__description">{blog.description}</p>
              </div>

              <div className="comment__list mt-5">
                <h4 className="mb-5">3 Comments</h4>

                <div className="single__comment d-flex gap-3">
                  <img src={commentImg} alt="" />
                  <div className="comment__content">
                    <h6 className=" fw-bold">Салам Саламович</h6>
                    <p className="section__description mb-0">14 July, 2022</p>
                    <p className="section__description">
                      Спасибо за такой прекрасный блог! Очень информативно
                    </p>

                    <span className="replay d-flex align-items-center gap-1">
                      <i class="ri-reply-line"></i> Ответить
                    </span>
                  </div>
                </div>

                {/* =============== comment form ============ */}
                <div className="leave__comment-form mt-5">
                  <h4>Оставьте комментарий</h4>
                  <p className="section__description">
                    Вы должны войти чтобы оставить комментарий
                  </p>

                  <Form>
                    <FormGroup className=" d-flex gap-3">
                      <Input type="text" placeholder="Имя" />
                      <Input type="email" placeholder="Email" />
                    </FormGroup>

                    <FormGroup>
                      <textarea
                        rows="5"
                        className="w-100 py-2 px-3"
                        placeholder="Комментарий"
                      ></textarea>
                    </FormGroup>

                    <button className="btn comment__btn mt-3">
                      Отправить ответ
                    </button>
                  </Form>
                </div>
              </div>
            </Col>

            <Col lg="4" md="4">
              <div className="recent__post mb-4">
                <h5 className=" fw-bold">Recent Posts</h5>
              </div>
              {blogList.map((item) => (
                <div className="recent__blog-post mb-4" key={item.id}>
                  <div className="recent__blog-item d-flex gap-3">
                    <img src={item.imgUrl} alt="" className="w-25 rounded-2" />
                    <h6>
                      <Link to={`/blogs/${item.title}`}>{blog.title}</Link>
                    </h6>
                  </div>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default BlogDetails;

// import React, { useEffect } from "react";
// import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";

// import { useParams } from "react-router-dom";
// import blogData from "../assets/data/blogData.js";
// import Helmet from "../components/Helmet/Helmet";
// import { Link } from "react-router-dom";

// import commentImg from "../assets/all-images/ava-1.jpg";

// import "../styles/blog-details.css";

// const BlogDetails = () => {
//   const { slug } = useParams();
//   const blog = blogData.find((blog) => blog.title === slug);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [blog]);

//   return (
//     <Helmet title={blog.title}>
//       <section>
//         <Container>
//           <Row>
//             <Col lg="8" md="8">
//               <div className="blog__details">
//                 <img src={blog.imgUrl} alt="" className="w-100" />
//                 <h2 className="section__title mt-4">{blog.title}</h2>

//                 <div className="blog__publisher d-flex align-items-center gap-4 mb-4">
//                   <span className="blog__author">
//                     <i class="ri-user-line"></i> {blog.author}
//                   </span>

//                   <span className=" d-flex align-items-center gap-1 section__description">
//                     <i class="ri-calendar-line"></i> {blog.date}
//                   </span>

//                   <span className=" d-flex align-items-center gap-1 section__description">
//                     <i class="ri-time-line"></i> {blog.time}
//                   </span>
//                 </div>

//                 <p className="section__description">{blog.description}</p>
//                 <h6 className="ps-5 fw-normal">
//                   <blockquote className="fs-4">{blog.quote}</blockquote>
//                 </h6>
//                 <p className="section__description">{blog.description}</p>
//               </div>

//               <div className="comment__list mt-5">
//                 <h4 className="mb-5">3 Comments</h4>

//                 <div className="single__comment d-flex gap-3">
//                   <img src={commentImg} alt="" />
//                   <div className="comment__content">
//                     <h6 className=" fw-bold">Салам Саламович</h6>
//                     <p className="section__description mb-0">14 July, 2022</p>
//                     <p className="section__description">
//                       Спасибо за такой прекрасный блог! Очень информативно
//                     </p>

//                     <span className="replay d-flex align-items-center gap-1">
//                       <i class="ri-reply-line"></i> Ответить
//                     </span>
//                   </div>
//                 </div>

//                 {/* =============== comment form ============ */}
//                 <div className="leave__comment-form mt-5">
//                   <h4>Оставьте комментарий</h4>
//                   <p className="section__description">
//                     Вы должны войти чтобы оставить комментарий
//                   </p>

//                   <Form>
//                     <FormGroup className=" d-flex gap-3">
//                       <Input type="text" placeholder="Имя" />
//                       <Input type="email" placeholder="Email" />
//                     </FormGroup>

//                     <FormGroup>
//                       <textarea
//                         rows="5"
//                         className="w-100 py-2 px-3"
//                         placeholder="Комментарий"
//                       ></textarea>
//                     </FormGroup>

//                     <button className="btn comment__btn mt-3">
//                       Отправить ответ
//                     </button>
//                   </Form>
//                 </div>
//               </div>
//             </Col>

//             <Col lg="4" md="4">
//               <div className="recent__post mb-4">
//                 <h5 className=" fw-bold">Recent Posts</h5>
//               </div>
//               {blogData.map((item) => (
//                 <div className="recent__blog-post mb-4" key={item.id}>
//                   <div className="recent__blog-item d-flex gap-3">
//                     <img src={item.imgUrl} alt="" className="w-25 rounded-2" />
//                     <h6>
//                       <Link to={`/blogs/${item.title}`}>{blog.title}</Link>
//                     </h6>
//                   </div>
//                 </div>
//               ))}
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </Helmet>
//   );
// };

// export default BlogDetails;
