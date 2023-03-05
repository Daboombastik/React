import React from 'react';


interface IFooter{
    weight: string,
    height: string,
    children: React.ReactNode
}

const Footer: React.FunctionComponent<IFooter> = ({weight, height, children}: IFooter) =>
{
    return (
        <footer>
            <p>My Blog &copy; 2023</p>
            <p>Powered by React</p>
            {children}
        </footer>
    );
}

export default Footer;
