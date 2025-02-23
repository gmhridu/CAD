import {motion} from "framer-motion";


const HeaderComponent = ({text}: {text:string}) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-black/75 text-left py-16"
        >
            <h1 className="px-5 mx-5 text-3xl font-bold text-gray-200">{text}</h1>
        </motion.div>
    )
}
export default HeaderComponent
