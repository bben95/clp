import React, { useRef } from 'react';
import ReactDOMServer from 'react-dom/server';
import NavBar1 from '../sectionComponents/navBar/navBar1'
import NavBar2 from '../sectionComponents/navBar/navBar2'
import NavBar3 from '../sectionComponents/navBar/navBar3'


const FinalPage = () => {
  const htmlRef = useRef(null);
  const extractJavaScript = (element) => {
    let jsContent = `<script src="main.js"></script>`;

    
    if (element.props && element.props.onLoad && typeof element.props.onLoad === 'function') {
      jsContent += element.props.onLoad.toString() + '\n';
    }

    
    React.Children.forEach(element.props.children, child => {
      if (React.isValidElement(child)) {
        jsContent += extractJavaScript(child);
      }
    });

    return jsContent;
  };
  const downloadFiles = () => {
    
    const htmlContent = htmlRef.current.innerHTML;

   
    const cssContent = Array.from(document.styleSheets)
      .map(sheet => Array.from(sheet.cssRules).map(rule => rule.cssText).join('\n'))
      .join('\n');

    
    let jsContent = '';
    jsContent += extractJavaScript(<NavBar1/>);
    jsContent += extractJavaScript(<NavBar2/>);
   
    const htmlBlob = new Blob([htmlContent], { type: 'text/html' });
    const htmlUrl = URL.createObjectURL(htmlBlob);
    const htmlLink = document.createElement('a');
    htmlLink.href = htmlUrl;
    htmlLink.download = 'science_art_page.html';
    document.body.appendChild(htmlLink);
    htmlLink.click();
    document.body.removeChild(htmlLink);

    
    const cssBlob = new Blob([cssContent], { type: 'text/css' });
    const cssUrl = URL.createObjectURL(cssBlob);
    const cssLink = document.createElement('a');
    cssLink.href = cssUrl;
    cssLink.download = 'styles.css';
    document.body.appendChild(cssLink);
    cssLink.click();
    document.body.removeChild(cssLink);

    const jsBlob = new Blob([jsContent], { type: 'text/javascript' });
    const jsUrl = URL.createObjectURL(jsBlob);
    const jsLink = document.createElement('a');
    jsLink.href = jsUrl;
    jsLink.download = 'main.js';
    document.body.appendChild(jsLink);
    jsLink.click();
    document.body.removeChild(jsLink);
  };

  return (
    <div ref={htmlRef}>
           <NavBar1/>
      <NavBar2/>
      <NavBar3/>
 
      {/* Add more components as needed */}
      <button onClick={downloadFiles}>Download Files</button>
    </div>
  );
};

export default FinalPage;
