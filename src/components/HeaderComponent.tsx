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
            <h1 className="text-3xl font-bold pl-5 text-gray-200">{text}</h1>
        </motion.div>
    )
}
export default HeaderComponent
