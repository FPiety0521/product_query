import { useRouter } from "next/router"
export default function ProductDetail() {
    const router = useRouter();
    const query = router.query;
    console.log(query)
    return (
        <div>
            Detail
        </div>
    )
}