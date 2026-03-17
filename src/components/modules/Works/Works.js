import Work from '../../atoms/work/work';
import './works.scss';

function Works({works}) {

    return (
        <div className="sec-container works-container" id="works">
            <h2 className="sec-title works-title">Work Experience</h2>
            <ul className="works-list">
                {works.map((work) => (
                    <Work
                        key={work.id}
                        title={work.title}
                        desc={work.desc}
                        link={work.link}
                        image={work.image}
                        order={work.order}
                        noImage={work?.noImage}
                        period={work.period}    
                    />
                ))}
            </ul>
        </div>
    );
}

export default Works;
