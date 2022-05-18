import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import React, { useEffect, useState } from "react";
import useWindowDimensions from "./hooks/useWindowDimensions";
import Link from "next/link";
import { motion } from "framer-motion";
import DragCat from "./animations/DragCat";

function PDFPage() {
  const [loading, setLoading] = useState(true);
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
    setLoading(false);
  }

  function setLoadDelay() {
    setLoading(false);
  }

  useEffect(() => {
    setTimeout(function () {
      setLoadDelay();
    }, 1000);
  });

  const variantsLoad = {
    hidden: { opacity: 0, x: 0, y: -50 },
    enter: { opacity: 1, x: 0, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: 0, y: -50, transition: { duration: 0.5 } },
  };

  const { width }: any = useWindowDimensions();

  const disabled =
    "bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed";
  const enabled =
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";

  return (
    <>
      {loading ? (
        <div className="flex object-scale-down h-screen justify-center">
          <h2 className="dongle text-6xl">Loading...</h2>
          <DragCat />
        </div>
      ) : (
        <motion.div
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variantsLoad}
          className="relative z-20   pb-20"
        >
          <h2 className="text-4xl my-5 flex align-center justify-center items-center telex">
            Whitepaper
          </h2>
          <Link href="/uploads/Hero-Galaxy-WhitepaperV3.pdf">
            <button className={enabled}>Click to expand</button>
          </Link>
          <div className="pdf-bg h-screen max-h-full overflow-scroll">
            <Document
              file="/uploads/Hero-Galaxy-WhitepaperV3.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page scale={width <= 640 ? 0.6 : 1} pageNumber={pageNumber} />
              <Page
                scale={width <= 640 ? 0.6 : 1}
                pageNumber={pageNumber + 1}
              />
              <Page
                scale={width <= 640 ? 0.6 : 1}
                pageNumber={pageNumber + 2}
              />
              <Page
                scale={width <= 640 ? 0.6 : 1}
                pageNumber={pageNumber + 3}
              />
              <Page
                scale={width <= 640 ? 0.6 : 1}
                pageNumber={pageNumber + 4}
              />
              <Page
                scale={width <= 640 ? 0.6 : 1}
                pageNumber={pageNumber + 5}
              />
               <Page
                scale={width <= 640 ? 0.6 : 1}
                pageNumber={pageNumber + 6}
              />
               <Page
                scale={width <= 640 ? 0.6 : 1}
                pageNumber={pageNumber + 7}
              />
               <Page
                scale={width <= 640 ? 0.6 : 1}
                pageNumber={pageNumber + 8}
              />
            </Document>
          </div>
          {/* <p className="dongle text-4xl">
            Page {pageNumber} of {numPages}
          </p>
          <div className="flex flex-row justify-between">
            <button
              className={pageNumber <= 1 ? disabled : enabled}
              onClick={() => setPageNumber(pageNumber - 1)}
            >
              Prev page
            </button>
            <button
              className={pageNumber >= numPages ? disabled : enabled}
              onClick={() => setPageNumber(pageNumber + 1)}
            >
              Next page
            </button>
          </div> */}
        </motion.div>
      )}
    </>
  );
}

export default PDFPage;
