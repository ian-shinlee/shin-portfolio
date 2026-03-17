import './contact.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-creative';

function Contact() {

    const renderContactSlide = ({title}) => (
        <SwiperSlide>
            <div className="contact-desc">
                <h3 dangerouslySetInnerHTML={{ __html: title }} />
                <p>제게 궁금한 점이 있으시다면 연락해 주세요 :)<br/>빠르게 답장 드리겠습니다!</p>
                <a href="mailto:ian.shinlee@gmail.com" className="contact-link">
                    ian.shinlee@gmail.com
                </a>
            </div>
        </SwiperSlide>
    );

    return (
        <div className="sec-container contact-container" id="contact">
            <Swiper
                grabCursor={true}
                effect={'creative'}
                creativeEffect={{
                prev: {
                    shadow: true,
                    translate: [0, 0, -400],
                },
                next: {
                    translate: ['100%', 0, 0],
                },
                }}
                modules={[EffectCreative]}
            >
                {renderContactSlide({
                    title: "<span class=\"highlight\">함께 일할</span> 웹퍼블리셔를 찾고 계신가요?",
                })}
                {renderContactSlide({
                    title: "<span class=\"highlight\">협업</span>과 <span class=\"highlight\">소통</span>을 중요하게 생각하는 퍼블리셔!",
                })}
                {renderContactSlide({
                    title: "<span class=\"highlight\">지금 연락주시기 바랍니다!!!</span>",
                })}
            </Swiper>
        </div>
    );
}

export default Contact;
