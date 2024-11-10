import React from 'react';
import './index.css'; // اطمینان حاصل کنید که این فایل CSS در مسیر درست قرار دارد

const Resume = () => {
    return (
        <div>
            <div className="bg-image"></div>
            <div className="bg-text">
                <h1 style={{ fontSize: '50px' }}>I am Zahra Hodaie</h1>
                <p>And I'm a Computer Engineering</p>
            </div>

            <div className="bgimg-1">
                <div className="caption">
                    <div className="bg-image"></div>
                    <div className="bg-text2">
                        <h1 style={{
                            fontSize: '50px',
                            color: '#0c0120',
                            textShadow: '2px 2px 4px #fcfafa, -2px -2px 4px #000000',
                            background: 'linear-gradient(to right, rgba(255, 255, 255, 0.868), rgb(255, 255, 255))'
                        }}>
                            <i className="fa fa-search">درباره من</i>
                        </h1>

                        <pre>
                            <h1 style={{
                                fontSize: '20px',
                                color: '#ffffff',
                                textShadow: '2px 2px 4px #ffffff, -2px -2px 4px #000000'
                            }}>
                                <img src="me.jpg" alt="تصویر تایپ شخصیتی INTP" width="255" height="363" style={{ float: 'left', border: '2px solid black' }} />
                                دانشجوی رشته مهندسی کامپیوتر مسلط به مفاهیم اصلی رشته کامپیوتر و تفکر برنامه نویسی
                                آشنایی با زبان های برنامه نویسی جاوا و C++
                                آشنایی با برنامه های مایکروسافت آفیس از جمله Excel، PowerPoint و Word
                                آشنایی با برنامه نویسی قطعات سخت افزاری جهت هوشمندسازی ابزار و اینترنت اشیا
                                آشنایی با طراحی وب سایت
                            </h1>
                        </pre>
                    </div>
                </div>
            </div>

            <div style={{ color: '#0b0233', backgroundColor: 'white', textAlign: 'center', padding: '5px 40px', textAlign: 'justify' }}>
                <h1 style={{
                    fontSize: '30px',
                    color: '#190b57',
                    textShadow: '2px 2px 4px #ea569b, -2px -2px 4px #ffffff',
                    textAlign: 'right'
                }}>
                    <i className="fa fa-book">سوابق تحصیلی</i>
                </h1>
            </div>

            <div className="bgimg-2">
                <div className="bg-image"></div>
                <div className="bg-text2">
                    <pre>
                        <h1 style={{
                            fontSize: '20px',
                            color: '#ffffff',
                            textShadow: '2px 2px 4px #ffffff, -2px -2px 4px #000000',
                            background: 'linear-gradient(to right, rgba(255, 255, 255, 0), rgba(79, 52, 253, 0.468), rgba(255, 255, 255, 0))'
                        }}>
                            کارشناسی مهندسی کامپیوتر<br />
                            گرایش نرم‌افزار<br />
                            دانشگاه: دانشگاه یزد - دولتی<br />
                            اصفهان<br />
                            معدل: 15
                        </h1>
                    </pre>
                </div>
            </div>

            <div style={{ position: 'relative' }}>
                <div style={{ color: '#ddd', backgroundColor: '#ffffff', textAlign: 'center', padding: '5px 40px', textAlign: 'justify' }}>
                    <h1 style={{
                        fontSize: '30px',
                        color: '#190b57',
                        textShadow: '2px 2px 4px #ea569b, -2px -2px 4px #ffffff',
                        textAlign: 'right'
                    }}>
                    <i className="fa fa-pencil">پروژه ها</i>
                </h1>
            </div>
        </div>

        <div className="bgimg-3">
            <div className="bg-image"></div>

        </div>
    </div>
);
};

export default Resume;
