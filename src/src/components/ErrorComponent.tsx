import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

interface ErrorComponentProps {
  message?: string;
  onRetry?: () => void;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({
  message = "Something went wrong. Please try again.",
  onRetry,
}) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center p-8 bg-red-50 rounded-2xl shadow-md border border-red-200 max-w-md mx-auto mt-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="bg-red-100 p-4 rounded-full mb-4">
        <AlertTriangle className="w-10 h-10 text-red-500" />
      </div>

      <h2 className="text-xl font-semibold text-red-700 mb-2">Oops!</h2>
      <p className="text-gray-600 mb-6">{message}</p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="px-5 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors duration-200 shadow-sm"
        >
          Try Again
        </button>
      )}
    </motion.div>
  );
};
export default ErrorComponent;

// export default ErrorComponent;
// import React from "react";
// import ErrorComponent from "./ErrorComponent";

// const ExamplePage: React.FC = () => {
//   const handleRetry = () => {
//     console.log("Retrying...");
//     // you can re-fetch data or reload a component here
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <ErrorComponent
//         message="Failed to load data from the server."
//         onRetry={handleRetry}
//       />
//     </div>
//   );
// };

// export default ExamplePage;
