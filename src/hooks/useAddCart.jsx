import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addCartThunk } from "../store/slices/cartProducts.slice"

const useAddCart = () => {
    const dispatch = useDispatch()
    const userName = localStorage.getItem('userName')
    const navigate = useNavigate()
    const addProductHookFunction = (product, quantity = 1) => {
        if (userName) {
            const productSelected = {
                "id": product.id,
                "quantity": quantity,
            }
            dispatch(addCartThunk(productSelected))
        } else { 
            alert('You need to log first') 
            navigate('/login')
        }
    }

    return [addProductHookFunction]
}

export default useAddCart