import { motion } from "framer-motion";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
// import PDFPage from "../components/PDFPage";

const PDFPage = dynamic(() => import("../components/PDFPage"), { ssr: false });

// import Hero from "../components/Hero";
import Layout from "../components/wrappers/Layout";

// const PDFViewer = dynamic(() => import('../components/PdfViewer'), {ssr: false})

const Home: NextPage = () => {
  return (
    <div className={`bg-doodle`}>
      <Layout title="Whitepaper">
          
        <motion.div
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
          className="flex justify-center h-screen w-screen relative z-40 overflow-hidden mobile-paper"
        >
          <PDFPage />
        </motion.div>
      </Layout>
    </div>
  );
};

export default Home;
