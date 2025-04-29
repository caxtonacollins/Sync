// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";

// export default function MultipleOptions() {
//   const options = [
//     { title: "Fast Integration", description: "Quickly set up and manage your workflows seamlessly." },
//     { title: "Custom Solutions", description: "Tailor-made features to fit your unique needs." },
//     { title: "24/7 Support", description: "We're here to assist you anytime, anywhere." },
//   ];

//   return (
//     <section className="w-full py-12 md:py-16 lg:py-20 bg-[var(--color-background-primary)]">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2
//             className="text-[var(--color-text-off-white)] text-[var(--text-h1)] font-bold mb-4 text-balance"
//           >
//             One Application, Multiple Options
//           </h2>
//           <p className="text-[var(--color-text-purple2)] text-lg max-w-2xl mx-auto">
//             Choose the solution that fits your journey best.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {options.map((option, idx) => (
//             <motion.div
//               key={idx}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.97 }}
//               transition={{ type: "spring", stiffness: 250, damping: 20 }}
//               className="h-full"
//             >
//               <Card className="bg-gradient-to-b from-[var(--color-linear-gradient1)] to-[var(--color-linear-gradient3)] text-[var(--color-text-off-white)] rounded-2xl shadow-xl hover:shadow-2xl transition-shadow h-full">
//                 <CardContent className="flex flex-col items-center justify-between text-center p-8 h-full">
//                   <h3 className="text-[var(--color-green)] text-[var(--text-h2)] font-semibold mb-4">
//                     {option.title}
//                   </h3>
//                   <p className="text-[var(--color-text-purple)] text-[var(--text-h4)] mb-8">
//                     {option.description}
//                   </p>
//                   <Button variant="secondary" className="w-full text-[var(--color-text-tertiary)] font-bold bg-[var(--color-active-button)] hover:bg-blue-700">
//                     Select
//                   </Button>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
