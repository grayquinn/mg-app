import React, {useState} from 'react';

const Bottom = () => {
    const [content, setContent] = useState({
        personnel: 'Jenny Doe',
        position: 'Lead Hammerer',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    });

    const handleButtonClick = (newContent) => {
        setContent(newContent);
    };

    return (
        <div className="bottom">
            <div className='wrapperB'>
                <div className='text'>
                    <p>{content.text}</p>
                </div>
                <div className="info">
                    <div className="Personnel">{content.personnel}</div>
                    <div className="Position">{content.position}</div>
            </div>
            <div className="buttons2">
                <button className='circle-button' onClick={() => 
                    handleButtonClick({ personnel: 'Jenny Doe', position: 'Lead Hammerer', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' })}></button>
                <button className='circle-button' onClick={() => 
                    handleButtonClick({ personnel: 'Jane Doe', position: 'Designer', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis vestibulum lorem, ac euismod tortor. Fusce eget gravida ex. Phasellus nec turpis eu sapien tincidunt efficitur.' })} ></button>
                <button className='circle-button' onClick={() => 
                    handleButtonClick({ personnel: 'Jim Doe', position: 'Developer', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in lectus nec metus gravida tempus. Vestibulum ac vestibulum velit. Maecenas vel feugiat mi, ut fringilla metus.' })}></button>
            </div>
        </div>
    </div>
    );

}











































export default Bottom