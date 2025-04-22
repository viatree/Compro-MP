import { motion } from "framer-motion";

const products = [
  {
    title: "Folding Carton Boxes",
    image: "/images/finishing.png",
    description:
      "Ideal for cosmetics, pharmaceuticals, FMCG, and other industries, combining durability and premium branding.",
  },
  {
    title: "Hangtags",
    image: "/images/finishing.png",
    description:
      "Enhance product presentation and brand storytelling with customised hangtags.",
  },
  {
    title: "Leaflets",
    image: "/images/finishing.png",
    description:
      "Informative and versatile, with multiple folding options available to suit different product types and regulatory needs.",
  },
  {
    title: "Promotional Items",
    image: "/images/finishing.png",
    description:
      "Customisable and impactful for brand awareness and seasonal campaigns.",
  },

  {
    title: "Label",
    image: "/images/finishing.png",
    description:
      "High-quality labels for brand recognition, compliance, and product differentiation.",
  },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

    export default function ProductSection() {
        return (
          <section className="py-16 px-8 md:px-16 lg:px-24 xl:px-43 bg-white">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-[var(--color-primary)] mb-12 text-center"
            >
              Our Products
            </motion.h2>
      
            <div className="grid gap-12 md:grid-cols-2">
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeUpVariant}
                  viewport={{ once: true }}
                  className="bg-primary text-white p-4 shadow-md flex flex-col items-center text-center"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-92 h-32 object-contain mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                  <p>{product.description}</p>
                </motion.div>
              ))}
            </div>
          </section>
        );
      }
 