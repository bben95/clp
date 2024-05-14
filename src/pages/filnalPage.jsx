import React, { useRef } from 'react';
import NavBar1 from "../sectionComponents/navBar/navBar1";
import NavBar2 from "../sectionComponents/navBar/navBar2";
import NavBar3 from "../sectionComponents/navBar/navBar3";
import Hero1 from "../sectionComponents/hero/hero1";
import Hero2 from "../sectionComponents/hero/hero2";
import Hero3 from "../sectionComponents/hero/hero3";
import Hero4 from "../sectionComponents/hero/hero4";
import Hero5 from "../sectionComponents/hero/hero5";
import Hero6 from "../sectionComponents/hero/hero6";
import Hero7 from "../sectionComponents/hero/hero7";
import Hero8 from "../sectionComponents/hero/hero8";
import Hero9 from "../sectionComponents/hero/hero9";
import Hero10 from "../sectionComponents/hero/hero10";
import Hero11 from "../sectionComponents/hero/hero11";
import Hero12 from "../sectionComponents/hero/hero12";
import About1 from "../sectionComponents/about/about1";
import About2 from "../sectionComponents/about/about2";
import About4 from "../sectionComponents/about/about4";
import About5 from "../sectionComponents/about/about5";
import About6 from "../sectionComponents/about/about6";
import About7 from "../sectionComponents/about/about7";
import About8 from "../sectionComponents/about/about8";
import About9 from "../sectionComponents/about/about9";
import About10 from "../sectionComponents/about/about10";
import About11 from "../sectionComponents/about/about11";
import About12 from "../sectionComponents/about/about12";
import Course1 from "../sectionComponents/course/course1";
import Course2 from "../sectionComponents/course/course2";
import Course3 from "../sectionComponents/course/course3";
import Course4 from "../sectionComponents/course/course4";
import Course6 from "../sectionComponents/course/course6";
import Course5 from "../sectionComponents/course/course5";
import Course7 from "../sectionComponents/course/course7";
import Course8 from "../sectionComponents/course/course8";
import Course9 from "../sectionComponents/course/course9";
import Course10 from "../sectionComponents/course/course10";
import Course11 from "../sectionComponents/course/course11";
import Course12 from "../sectionComponents/course/course12";
import More1 from "../sectionComponents/morecourse/more1";
import More2 from "../sectionComponents/morecourse/more2";
import More3 from "../sectionComponents/morecourse/more3";
import More4 from "../sectionComponents/morecourse/more4";
import More5 from "../sectionComponents/morecourse/more5";
import More6 from "../sectionComponents/morecourse/more6";
import More7 from "../sectionComponents/morecourse/more7";
import More8 from "../sectionComponents/morecourse/more8";
import Table8 from "../sectionComponents/table/table8";
import Table9 from "../sectionComponents/table/table9";
import Table10 from "../sectionComponents/table/table10";
import Table12 from "../sectionComponents/table/table12";
import Test1 from "../sectionComponents/testimonial/test1";
import Test2 from "../sectionComponents/testimonial/test2";
import Test3 from "../sectionComponents/testimonial/test3";
import Test4 from "../sectionComponents/testimonial/test4";
import Test5 from "../sectionComponents/testimonial/test5";
import Test6 from "../sectionComponents/testimonial/test6";
import Test7 from "../sectionComponents/testimonial/test7";
import Test8 from "../sectionComponents/testimonial/test8";
import Test9 from "../sectionComponents/testimonial/test9";
import Test10 from "../sectionComponents/testimonial/test10";
import Test11 from "../sectionComponents/testimonial/test11";
import JSZip from 'jszip';
import { useSelector } from 'react-redux'


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
    const zip = new JSZip();
    const htmlContent = `<!DOCTYPE html>
    <!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
    <!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
    <!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
    <!--[if gt IE 8]>      <html class="no-js"> <!--<![endif]-->
    <html>
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>Rigi-Landing Page</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="./styles.css" />
      </head>
      <body>
      ${htmlRef.current.innerHTML}
  </body>
</html>
      `;
      zip.file('index.html', htmlContent);
      const cssContent = Array.from(document.styleSheets)
      .map(sheet => Array.from(sheet.cssRules).map(rule => rule.cssText).join('\n'))
      .join('\n');
    zip.file('styles.css', cssContent);
    let jsContent = '';
    jsContent += extractJavaScript(<NavBar1 />);
    jsContent += extractJavaScript(<NavBar2 />);
    zip.file('main.js', jsContent);
    zip.generateAsync({ type: 'blob' }).then(blob => {
      // Create a link to download the zip file
      const zipUrl = URL.createObjectURL(blob);
      const zipLink = document.createElement('a');
      zipLink.href = zipUrl;
      zipLink.download = 'Landing-page.zip';
      document.body.appendChild(zipLink);
      zipLink.click();
      document.body.removeChild(zipLink);
    });

   
    // const cssContent = Array.from(document.styleSheets)
    //   .map(sheet => Array.from(sheet.cssRules).map(rule => rule.cssText).join('\n'))
    //   .join('\n');

    
    // let jsContent = '';
    // jsContent += extractJavaScript(<NavBar1/>);
    // jsContent += extractJavaScript(<NavBar2/>);
   
    // const htmlBlob = new Blob([htmlContent], { type: 'text/html' });
    // const htmlUrl = URL.createObjectURL(htmlBlob);
    // const htmlLink = document.createElement('a');
    // htmlLink.href = htmlUrl;
    // htmlLink.download = 'index.html';
    // document.body.appendChild(htmlLink);
    // htmlLink.click();
    // document.body.removeChild(htmlLink);

    
    // const cssBlob = new Blob([cssContent], { type: 'text/css' });
    // const cssUrl = URL.createObjectURL(cssBlob);
    // const cssLink = document.createElement('a');
    // cssLink.href = cssUrl;
    // cssLink.download = 'styles.css';
    // document.body.appendChild(cssLink);
    // cssLink.click();
    // document.body.removeChild(cssLink);

    // const jsBlob = new Blob([jsContent], { type: 'text/javascript' });
    // const jsUrl = URL.createObjectURL(jsBlob);
    // const jsLink = document.createElement('a');
    // jsLink.href = jsUrl;
    // jsLink.download = 'main.js';
    // document.body.appendChild(jsLink);
    // jsLink.click();
    // document.body.removeChild(jsLink);
  };
  const indexs = useSelector(state => state.data);
  const section1 = [<NavBar1 />, <NavBar2 />, <NavBar3 />];
  const section2 = [
    <Hero1 />,
    <Hero2 />,
    <Hero3 />,
    <Hero4 />,
    <Hero5 />,
    <Hero6 />,
    <Hero7 />,
    <Hero8 />,
    <Hero9 />,
    <Hero10 />,
    <Hero11 />,
    <Hero12 />,
  ];
  const section3 = [
    <About1 />,
    <About2 />,
    <About4 />,
    <About5 />,
    <About6 />,
    <About7 />,
    <About8 />,
    <About9 />,
    <About10 />,
    <About11 />,
    <About12 />,
  ];
  const section4 = [
    <Course1 />,
    <Course2 />,
    <Course3 />,
    <Course4 />,
    <Course5 />,
    <Course6 />,
    <Course7 />,
    <Course8 />,
    <Course9 />,
    <Course10 />,
    <Course11 />,
    <Course12 />,
  ];
  const section5 = [
    <More1 />,
    <More2 />,
    <More3 />,
    <More4 />,
    <More5 />,
    <More6 />,
    <More7 />,
    <More8 />,
  ];
  const section6 = [<Table8 />, <Table9 />, <Table10 />, <Table12 />];
  const section7 = [
    <Test1 />,
    <Test2 />,
    <Test2 />,
    <Test3 />,
    <Test4 />,
    <Test5 />,
    <Test6 />,
    <Test7 />,
    <Test8 />,
    <Test9 />,
    <Test10 />,
    <Test11 />,
  ];
  let components=[[...section1],[...section2],[...section3],[...section4],[...section5],[...section6],[...section7]];
  let selectedComponents=[];
  components?.forEach((item,i) => indexs[i]!==null && selectedComponents.push(item[indexs[i]]));

  console.log(selectedComponents);
  

  return (
    <div  ref={htmlRef} className="mx-2 my-2 h-[100vh] w-[80vw] overflow-y-scroll">
     
 
      {!(selectedComponents?.length===0)? selectedComponents.map((component)=> component):<div className="flex items-center justify-center  h-full"><h1 className='text-black text-[50px]'>Please Select Sections</h1></div>}
      <button className="inline-block rounded border border-indigo-600 bg-indigo-600 px-2 py-1 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 fixed bottom-2 right-2"  onClick={downloadFiles} >Download Files</button>
    </div>
  );
};

export default FinalPage;
