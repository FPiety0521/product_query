import { useRouter } from "next/router"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function ProductDetail() {
    const router = useRouter();
    const query = router.query;
    // console.log(query)
    // const query = {
    //         "parent": {
    //             "tcin": "87729776",
    //             "item": {
    //                 "product_vendors": [
    //                     {
    //                         "vendor_name": "Journee Collection",
    //                         "id": "10010160"
    //                     }
    //                 ],
    //                 "enrichment": {
    //                     "images": {
    //                         "alternate_image_urls": [
    //                             "https://target.scene7.com/is/image/Target/GUEST_6a0a2908-0072-416b-af9e-619b1e87259e",
    //                             "https://target.scene7.com/is/image/Target/GUEST_397edc03-6d39-45c5-91d3-810ff8896da9",
    //                             "https://target.scene7.com/is/image/Target/GUEST_54fb8e32-fb23-4ff9-93f3-21392674eca5",
    //                             "https://target.scene7.com/is/image/Target/GUEST_e4a7dca6-1ab7-4b79-ac60-06c79a68e4fa",
    //                             "https://target.scene7.com/is/image/Target/GUEST_9e2fad45-633c-423a-96f1-04fd9d7efafb",
    //                             "https://target.scene7.com/is/image/Target/GUEST_ac9e2317-5d92-4356-963b-992606ee26dd",
    //                             "https://target.scene7.com/is/image/Target/GUEST_cdb9fc63-909f-4789-ba4a-5051458f9ee7",
    //                             "https://target.scene7.com/is/image/Target/GUEST_781f14b6-0e61-4500-a69a-8b5479c70c8e"
    //                         ],
    //                         "primary_image_url": "https://target.scene7.com/is/image/Target/GUEST_0da66558-1662-429a-90e2-c46d7134627b"
    //                     },
    //                     "buy_url": "https://www.target.com/p/journee-collection-womens-jezlin-slip-on-almond-toe-ballet-flats/-/A-87729776",
    //                     "videos": [
    //                         {
    //                             "is_list_page_eligible": false,
    //                             "video_files": [
    //                                 {
    //                                     "video_url": "https://target.scene7.com/is/content/Target/GUEST_1b3330e2-d2aa-490c-8921-15f19d98710d_Flash9_Autox720p_2600k",
    //                                     "mime_type": "video/mp4"
    //                                 }
    //                             ]
    //                         }
    //                     ]
    //                 },
    //                 "relationship_type": "Variation Parent",
    //                 "relationship_type_code": "VAP",
    //                 "primary_brand": {
    //                     "linking_id": "5uyhn",
    //                     "name": "Journee Collection",
    //                     "canonical_url": "/b/journee-collection/-/N-5uyhn"
    //                 },
    //                 "fulfillment": {
    //                     "is_marketplace": true
    //                 },
    //                 "has_extended_sizing": false,
    //                 "product_description": {
    //                     "soft_bullets": {
    //                         "bullets": [
    //                             "Upper Material: Faux Suede",
    //                             "Toe Style: Almond",
    //                             "Heel Height/Type: 1/2-in Block Heel",
    //                             "Closure Type: Slip-on",
    //                             "Footbed: Padded"
    //                         ]
    //                     },
    //                     "bullet_descriptions": [
    //                         "<B>Care and Cleaning:</B> Spot or Wipe Clean",
    //                         "<B>Footwear Insole Material:</B> Man Made Materials",
    //                         "<B>Features:</B> Slip On",
    //                         "<B>Footwear Lining Material:</B> Man Made Materials",
    //                         "<B>Toe Style:</B> Almond Toe",
    //                         "<B>Heel:</B> Approximately 0.5 Inches Block Heel",
    //                         "<B>Footwear outsole material 1:</B> Man Made Materials",
    //                         "<B>Footwear toe openness:</B> Closed Toe",
    //                         "<B>Product Name:</B> Journee Collection Womens Jezlin Slip On Almond Toe Ballet Flats"
    //                     ],
    //                     "title": "Journee Collection Womens Jezlin Slip On Almond Toe Ballet Flats"
    //                 },
    //                 "merchandise_classification": {
    //                     "department_id": 96,
    //                     "class_id": 21
    //                 },
    //                 "cart_add_on_threshold": 35
    //             },
    //             "promotions": [],
    //             "price": {
    //                 "mixed_current_price_type": "mixed_sale",
    //                 "formatted_current_price": "$38.99",
    //                 "location_id": 3991,
    //                 "formatted_current_price_type": "reg"
    //             },
    //             "__typename": "ParentProductSummary",
    //             "ratings_and_reviews": {
    //                 "statistics": {
    //                     "rating": {
    //                         "average": 3.1,
    //                         "secondary_averages": [
    //                             {
    //                                 "id": "Style",
    //                                 "label": "style",
    //                                 "value": 4.4
    //                             },
    //                             {
    //                                 "id": "Comfort",
    //                                 "label": "comfort",
    //                                 "value": 1.8
    //                             },
    //                             {
    //                                 "id": "Width",
    //                                 "label": "width",
    //                                 "value": 2
    //                             },
    //                             {
    //                                 "id": "sizeShoes",
    //                                 "label": "size",
    //                                 "value": 1.6
    //                             }
    //                         ],
    //                         "count": 20
    //                     }
    //                 }
    //             },
    //             "variation_summary": {
    //                 "themes": [
    //                     {
    //                         "has_swatch": true,
    //                         "name": "size",
    //                         "swatches": [
    //                             {
    //                                 "value": "5.5",
    //                                 "first_child": {
    //                                     "alternate_image_urls": [
    //                                         "https://target.scene7.com/is/image/Target/GUEST_6a0a2908-0072-416b-af9e-619b1e87259e",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_397edc03-6d39-45c5-91d3-810ff8896da9",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_54fb8e32-fb23-4ff9-93f3-21392674eca5",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_e4a7dca6-1ab7-4b79-ac60-06c79a68e4fa",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_9e2fad45-633c-423a-96f1-04fd9d7efafb",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_ac9e2317-5d92-4356-963b-992606ee26dd",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_cdb9fc63-909f-4789-ba4a-5051458f9ee7",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_781f14b6-0e61-4500-a69a-8b5479c70c8e"
    //                                     ],
    //                                     "tcin": "87729773",
    //                                     "primary_image_url": "https://target.scene7.com/is/image/Target/GUEST_f954703e-9807-4438-8a2f-6519a08bf32c",
    //                                     "swatch_image_url": "https://target.scene7.com/is/image/Target/GUEST_12d635d0-bd82-4a0a-95fc-7cf307567a09"
    //                                 }
    //                             },
    //                             {
    //                                 "value": "5.5wd",
    //                                 "first_child": {
    //                                     "alternate_image_urls": [
    //                                         "https://target.scene7.com/is/image/Target/GUEST_9735a9a9-8b3d-40af-9f6a-dc7c82f98656",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_bba664a2-fca3-4a77-bc28-68ac8fdfe583",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_f0194bdb-d81c-4fdc-8c7b-54daa37559a8",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_63d836bd-e1d6-4c32-91a6-1dae39f19e5e",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_1ccd8da1-43f5-40f0-b541-4dd359359d7c",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_689017b8-718a-4969-b1ea-92a791f68d65",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_d3ddbfb9-06fe-40d1-a0e9-ee0b38a5b900",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_ac93c54a-032c-4b77-bd5e-a3be52bb84cc"
    //                                     ],
    //                                     "tcin": "87729782",
    //                                     "primary_image_url": "https://target.scene7.com/is/image/Target/GUEST_f954703e-9807-4438-8a2f-6519a08bf32c",
    //                                     "swatch_image_url": "https://target.scene7.com/is/image/Target/GUEST_931edad7-3bc4-4135-8d31-57ba6c341a00"
    //                                 }
    //                             },
    //                             {
    //                                 "value": "6",
    //                                 "first_child": {
    //                                     "alternate_image_urls": [
    //                                         "https://target.scene7.com/is/image/Target/GUEST_b4354e6a-5b03-4d83-b701-a2af1f9af894",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_16ea13b5-fad7-4a78-b734-95ac49deca93",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_b7041c83-3cdd-44d5-904d-2eb952334bef",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_675734da-3ba7-4966-8351-eee9a7c10da8",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_cb1d38b1-d1ce-45bf-ac2a-db3048910edb",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_84d685be-bff5-4696-a879-804efd24540f",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_fc255000-1735-4bbe-a93f-5f8d571422f1",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_489b0077-637c-4fd1-9f07-8fccebf70860"
    //                                     ],
    //                                     "tcin": "87729785",
    //                                     "primary_image_url": "https://target.scene7.com/is/image/Target/GUEST_aa7ee69c-0fca-483e-9065-675ef2817020",
    //                                     "swatch_image_url": "https://target.scene7.com/is/image/Target/GUEST_fe6690af-b82c-4c54-898a-df9d352517b6"
    //                                 }
    //                             },
    //                             {
    //                                 "value": "6w",
    //                                 "first_child": {
    //                                     "alternate_image_urls": [
    //                                         "https://target.scene7.com/is/image/Target/GUEST_ab798f8b-1028-4581-9c8a-dcfbd121caba",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_2cd4d49c-8dea-4277-be41-7894a67f8aa1",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_76862e00-4960-46c0-a4b6-dd462b4c2dc1",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_e5375179-8d76-4924-9ced-f6fb1243f92f",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_82f780cc-fb09-4f32-a824-1c08cc6d4e95",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_7c06ca8e-b8fc-4abc-b964-384df8321405",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_52e52542-4d5c-453a-9109-d8a4eb4307a1",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_740b1599-b713-4133-8a84-3724b909a4e0"
    //                                     ],
    //                                     "tcin": "87729787",
    //                                     "primary_image_url": "https://target.scene7.com/is/image/Target/GUEST_85e30a5a-ad35-45c0-8639-edeadb84ed1f",
    //                                     "swatch_image_url": "https://target.scene7.com/is/image/Target/GUEST_85e30a5a-ad35-45c0-8639-edeadb84ed1f?cropN=0.5975,0.565,0.0925,0.0925"
    //                                 }
    //                             },
    //                             {
    //                                 "value": "6.5",
    //                                 "first_child": {
    //                                     "alternate_image_urls": [
    //                                         "https://target.scene7.com/is/image/Target/GUEST_c355fca6-09d6-4e2f-a805-daca6f5379e7",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_b4805e63-7434-4637-8d1f-a311fed82646",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_97873553-c54f-488b-bcd6-ca4303e24a15",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_d850c29d-c960-4870-b4a0-f7512d2a4c34",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_c34decaa-97b0-4b4d-ae8e-4f41e2f17855",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_01c6139f-d8c4-4aa3-b09d-1dc5a6bf8758",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_a86c5896-2b5b-4f8e-8ebb-4194c47ce345",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_0be71a7f-c83d-4a11-91bc-917a3fa4eac5"
    //                                     ],
    //                                     "tcin": "87729789",
    //                                     "primary_image_url": "https://target.scene7.com/is/image/Target/GUEST_77822fe9-6b5e-43f5-bf18-8cc236780757",
    //                                     "swatch_image_url": "https://target.scene7.com/is/image/Target/GUEST_c042cb09-fcfc-42b3-b689-cdc68e0711a8"
    //                                 }
    //                             },
    //                             {
    //                                 "value": "6.5wd",
    //                                 "first_child": {
    //                                     "alternate_image_urls": [
    //                                         "https://target.scene7.com/is/image/Target/GUEST_bd9f6cde-0cd4-4b3e-bfce-79491f857ea1",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_8f82358d-22ea-437f-a8e9-ec01b00c819a",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_08d3fb48-ff4f-4a45-94ed-22233851b9de",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_fa456fce-20e4-4f6f-8b9f-02ea6994dbbf",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_edafab2d-5a80-4d8c-99c0-658cc0557828",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_109c7be8-4c59-41f4-b55c-aad7dbc62cd0",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_3676ff9c-c29d-4680-975b-a3ff15787c4b",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_957649b9-c377-4b1c-a84f-b37818d66237"
    //                                     ],
    //                                     "tcin": "87729792",
    //                                     "primary_image_url": "https://target.scene7.com/is/image/Target/GUEST_f954703e-9807-4438-8a2f-6519a08bf32c",
    //                                     "swatch_image_url": "https://target.scene7.com/is/image/Target/GUEST_8db65631-d1e4-4dab-a3f1-891063c6aaa5"
    //                                 }
    //                             },
    //                             {
    //                                 "value": "7",
    //                                 "first_child": {
    //                                     "alternate_image_urls": [
    //                                         "https://target.scene7.com/is/image/Target/GUEST_6396546f-5bb0-44c4-9f21-2f33bc589e83",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_ee2c6b5f-c270-4753-a15f-ddbcdd23106c",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_f33438a5-bf26-42e9-92bd-1d17299c568a",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_be346b3d-1f1b-468e-bf28-dcebfc2e3def",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_1c401f44-3e30-4ea5-9953-d273e5bd4838",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_39d33cd0-4b8a-44fa-a76c-a36bfeeb42eb",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_22762f54-724b-43e5-8d02-540a834f4b75",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_09eb7a96-c98d-4726-b684-e76b93b72bad"
    //                                     ],
    //                                     "tcin": "87729795",
    //                                     "primary_image_url": "https://target.scene7.com/is/image/Target/GUEST_f954703e-9807-4438-8a2f-6519a08bf32c",
    //                                     "swatch_image_url": "https://target.scene7.com/is/image/Target/GUEST_359c7743-33c5-4d9d-bc24-ca7541b3caa8"
    //                                 }
    //                             },
    //                             {
    //                                 "value": "7w",
    //                                 "first_child": {
    //                                     "alternate_image_urls": [
    //                                         "https://target.scene7.com/is/image/Target/GUEST_58104976-4013-47a3-b898-e26b132af38a",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_90eef8d8-4c8f-4ec7-915a-cb8575639fa5",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_e8a05088-c5d6-4100-a6e7-1733728c7639",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_2f10784e-ba0f-4da2-a00a-151f6db61e70",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_d53fc437-e704-4651-9690-1bc37cf05dbf",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_94545db7-78a2-4285-bfb3-700c7e132ab6",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_7df29a92-890c-4794-8041-45c9601b36c6",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_f32d6c27-5047-4c2a-9a23-33b94eba565f"
    //                                     ],
    //                                     "tcin": "87729798",
    //                                     "primary_image_url": "https://target.scene7.com/is/image/Target/GUEST_f954703e-9807-4438-8a2f-6519a08bf32c",
    //                                     "swatch_image_url": "https://target.scene7.com/is/image/Target/baseswatch?color=32,32,31"
    //                                 }
    //                             },
    //                             {
    //                                 "value": "7.5",
    //                                 "first_child": {
    //                                     "alternate_image_urls": [
    //                                         "https://target.scene7.com/is/image/Target/GUEST_dd899117-a904-43c2-a6b4-cc1be5dd563a",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_39c16421-0f9f-41b6-8774-c3fecfd56d72",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_ce41a041-12fe-4b65-ba16-422a9c0cbbdd",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_62944840-97ac-4e2f-a540-7f2c5b6756ed",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_849720d7-6b13-496b-9f90-13d409831473",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_67548cde-da06-44db-859a-2ab579d981ab",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_095a0436-4363-4b05-95a5-28f4c2b7e0f1",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_97020895-e896-41d4-8576-6a68811ef1b1"
    //                                     ],
    //                                     "tcin": "87729801",
    //                                     "primary_image_url": "https://target.scene7.com/is/image/Target/GUEST_f954703e-9807-4438-8a2f-6519a08bf32c",
    //                                     "swatch_image_url": "https://target.scene7.com/is/image/Target/GUEST_b76386e2-9229-4cca-ad23-7ffa6c3e4e67"
    //                                 }
    //                             },
    //                             {
    //                                 "value": "7.5wd",
    //                                 "first_child": {
    //                                     "alternate_image_urls": [
    //                                         "https://target.scene7.com/is/image/Target/GUEST_34f3b4b9-29bb-424c-bce8-9258c5afaa56",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_5941e9cf-2826-4ece-8603-64faebddc99d",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_2611a070-aafc-42d0-bd5e-c9751a09463e",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_b45d8ca2-83e7-49d8-a25e-5822b0c8ac74",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_42e7188a-76d4-49e4-8687-3c2b498fd019",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_2464a041-f4a9-461d-aa1b-6bcf5d7a6067",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_c39d6a52-c18b-4800-ae4c-624d16062cbc",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_8334a467-a6e9-4e7a-b62f-d73e0ae3764a"
    //                                     ],
    //                                     "tcin": "87729804",
    //                                     "primary_image_url": "https://target.scene7.com/is/image/Target/GUEST_f954703e-9807-4438-8a2f-6519a08bf32c",
    //                                     "swatch_image_url": "https://target.scene7.com/is/image/Target/GUEST_3b3bf366-ac51-4a7e-a9a2-0332d309ca16"
    //                                 }
    //                             },
    //                             {
    //                                 "value": "8",
    //                                 "first_child": {
    //                                     "alternate_image_urls": [
    //                                         "https://target.scene7.com/is/image/Target/GUEST_44ea8165-c919-416d-a896-c92cb4dca565",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_b8b904c5-9695-44f3-8dc3-737af323ff17",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_44a00e8a-f996-4d3c-bbe9-bcd6930ac55e",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_0d204112-c11e-491e-98ab-9ac9caf5ce06",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_96c7c8de-d96e-4a09-8ce6-b7d47ecf83f4",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_f6d30d4b-030c-4a7a-8b71-f9195ea381d5",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_b559e002-1a1f-49ac-be92-7ad7e234f549",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_d0765828-5bbc-4650-90e4-d2f0d455b449"
    //                                     ],
    //                                     "tcin": "87729807",
    //                                     "primary_image_url": "https://target.scene7.com/is/image/Target/GUEST_f954703e-9807-4438-8a2f-6519a08bf32c",
    //                                     "swatch_image_url": "https://target.scene7.com/is/image/Target/GUEST_f52d89cd-3ca7-4df4-8c5d-658b1a7791f6"
    //                                 }
    //                             },
    //                             {
    //                                 "value": "8w",
    //                                 "first_child": {
    //                                     "alternate_image_urls": [
    //                                         "https://target.scene7.com/is/image/Target/GUEST_d680a6ac-d6a9-45bf-90d6-47508708f4da",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_590c2032-a8ae-4e13-bd12-e608fc6e2d34",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_ac7bc7b9-8dfd-4a48-8da3-665e7afd169c",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_5a7a24b1-6b3d-4079-a1a7-3bfae36c2dfa",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_021b7098-51c4-43cf-8467-c4c5c4d060b1",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_3e2b9d76-c353-457b-bb2a-0b4e357daf4e",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_fe6f46cc-b4df-4cf7-a743-8a6f467d667c",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_1311674e-226e-4426-bbae-e779dfc56a3b"
    //                                     ],
    //                                     "tcin": "87729810",
    //                                     "primary_image_url": "https://target.scene7.com/is/image/Target/GUEST_5df31803-af33-4b82-912a-79961ec3a3a7",
    //                                     "swatch_image_url": "https://target.scene7.com/is/image/Target/baseswatch?color=36,35,32"
    //                                 }
    //                             },
    //                             {
    //                                 "value": "8.5",
    //                                 "first_child": {
    //                                     "alternate_image_urls": [
    //                                         "https://target.scene7.com/is/image/Target/GUEST_db1ea4ba-f36d-4451-81c9-ff814408cf28",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_429e53ec-ce01-41d7-ad5e-e0018e2efcd1",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_251c4660-9942-4ccd-a584-14a56af5ac2a",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_7b2187fe-0afb-4678-9538-e8db4648f6fc",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_1662895c-06dd-40e8-b5ef-e3188747f057",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_61aa7059-40a2-4f11-92b8-8fbb3a9fb916",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_b84fbb41-ed59-4db5-b7c8-cf387c30491f",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_238dfac8-0183-4eb2-b596-d0b732731612"
    //                                     ],
    //                                     "tcin": "87729813",
    //                                     "primary_image_url": "https://target.scene7.com/is/image/Target/GUEST_f954703e-9807-4438-8a2f-6519a08bf32c",
    //                                     "swatch_image_url": "https://target.scene7.com/is/image/Target/GUEST_87f0f61c-6b3d-4f58-b166-74eb724ecfa6"
    //                                 }
    //                             },
    //                             {
    //                                 "value": "8.5wd",
    //                                 "first_child": {
    //                                     "alternate_image_urls": [
    //                                         "https://target.scene7.com/is/image/Target/GUEST_74be6c3a-f1e2-4a4d-bf7c-230b82cf5004",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_bd73a2f5-4611-4191-9bae-b5b52e494a1c",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_488b95c3-68e7-49be-b3d4-45d37001bf11",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_71b2db5b-5a5d-4849-bde8-9509384926e2",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_2e7701ee-c102-49ee-9434-8a4f157f35f9",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_16d2fa63-78e1-4dcd-b3ba-ecad40819687",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_6d043190-b0de-4fca-aaf3-8c4b3a1c2cab",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_53b33397-230d-4a68-b654-5a8fa8499a61"
    //                                     ],
    //                                     "tcin": "87729816",
    //                                     "primary_image_url": "https://target.scene7.com/is/image/Target/GUEST_f954703e-9807-4438-8a2f-6519a08bf32c",
    //                                     "swatch_image_url": "https://target.scene7.com/is/image/Target/GUEST_6b24a15a-43eb-4848-baf0-9001f58495e7"
    //                                 }
    //                             },
    //                             {
    //                                 "value": "9",
    //                                 "first_child": {
    //                                     "alternate_image_urls": [
    //                                         "https://target.scene7.com/is/image/Target/GUEST_86234956-9018-445c-b565-4394975652da",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_ea0c8e3b-e5ad-4eb0-a210-834a795a3686",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_1f077123-1d2d-4793-b115-13e75be8b4a9",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_29ccbf1a-c2a4-4538-a80c-1c2951275f80",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_85d1139b-6640-4987-aef4-24eedfa5b7a5",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_fba54413-0ab9-435b-ae64-22345e470b83",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_363c972d-c56f-40c7-a920-dbf6c5ed92a5",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_6c155c60-d028-45ab-816c-cf10c8a00f31"
    //                                     ],
    //                                     "tcin": "87729819",
    //                                     "primary_image_url": "https://target.scene7.com/is/image/Target/GUEST_f954703e-9807-4438-8a2f-6519a08bf32c",
    //                                     "swatch_image_url": "https://target.scene7.com/is/image/Target/GUEST_cc5f5ff9-f4e4-4cc0-af7a-578a7c20384a"
    //                                 }
    //                             },
    //                             {
    //                                 "value": "9w",
    //                                 "first_child": {
    //                                     "alternate_image_urls": [
    //                                         "https://target.scene7.com/is/image/Target/GUEST_2b32fcb9-c0d6-48ce-aa49-79500a190123",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_1229374c-a2f9-4d02-9fb9-31b056749033",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_9dc3233e-78f2-4566-aced-90bd1f275127",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_68807ac9-5a36-4f01-8fc0-ad8646513c26",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_539d389c-fc98-44cb-8598-2636273a3315",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_6ddc9530-3991-422f-bd10-2a463254d445",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_7d7c2b98-6746-42b3-9909-76799acf695b",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_fd908874-162e-4d37-ba03-11fd931049fe"
    //                                     ],
    //                                     "tcin": "87729822",
    //                                     "primary_image_url": "https://target.scene7.com/is/image/Target/GUEST_9ba4af5e-1310-4d98-a443-d441a6444f65",
    //                                     "swatch_image_url": "https://target.scene7.com/is/image/Target/baseswatch?color=37,35,33"
    //                                 }
    //                             },
    //                             {
    //                                 "value": "9.5",
    //                                 "first_child": {
    //                                     "alternate_image_urls": [
    //                                         "https://target.scene7.com/is/image/Target/GUEST_009c72d6-c1e5-4532-92c6-8b54c979a72c",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_a40315c4-def6-4868-94b7-5a43c3edc2fe",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_c0f021ab-aa8a-4c9d-95cd-d18afdf20b80",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_a433eb8b-b852-4c23-bb16-1706e8287e57",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_b5357def-60fa-4134-890c-7006d65b3154",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_1b0219b9-8bab-4106-af70-f2a53fa6e1cf",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_4fbc3cc8-2a04-43c2-8285-2b6ad92423e4",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_2a805bb6-84a2-4776-aeb4-b2dacfc72304"
    //                                     ],
    //                                     "tcin": "87729825",
    //                                     "primary_image_url": "https://target.scene7.com/is/image/Target/GUEST_f954703e-9807-4438-8a2f-6519a08bf32c",
    //                                     "swatch_image_url": "https://target.scene7.com/is/image/Target/GUEST_1c33f681-c828-46c1-b9a5-50bbd86718e5"
    //                                 }
    //                             },
    //                             {
    //                                 "value": "9.5wd",
    //                                 "first_child": {
    //                                     "alternate_image_urls": [
    //                                         "https://target.scene7.com/is/image/Target/GUEST_8f1406b7-5055-4751-a07d-90f9375faaea",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_e2b4e57a-70c6-4999-b948-85ba595c70e6",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_3dffde53-af5d-4b74-912a-61046b37fe42",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_b83b7037-6365-4c39-b984-1caf8c7f2bf4",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_8a374d89-69dd-4883-be10-0323d6e901ad",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_c91682c0-705b-4206-b954-57c302a114fa",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_eee0a40a-bbfc-4668-9382-1defa8e94b6a",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_97040e39-a7b7-4651-a462-be5b81eb9226"
    //                                     ],
    //                                     "tcin": "87729828",
    //                                     "primary_image_url": "https://target.scene7.com/is/image/Target/GUEST_0073fd3c-9b87-47fc-bbdd-a6f825e397ed",
    //                                     "swatch_image_url": "https://target.scene7.com/is/image/Target/GUEST_b1e93aec-fbfd-416a-9048-d2df6d47bf4a"
    //                                 }
    //                             },
    //                             {
    //                                 "value": "10",
    //                                 "first_child": {
    //                                     "alternate_image_urls": [
    //                                         "https://target.scene7.com/is/image/Target/GUEST_e63d1bcd-8cf6-452f-9996-2990bd695209",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_f068be74-61ae-4263-9f3e-c0fdbee6ce82",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_506009cc-6d3b-4cf9-915f-d97112e2e715",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_2fc4845e-2ae0-4834-bad5-0db1d9d7c410",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_0a9edbf6-1ed2-46aa-93ec-fe3d966933bb",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_1a909bfc-754d-4c06-af89-a4b48ea61c95",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_369d2d46-26f3-47fc-86d9-a4e21abaf065",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_715b841e-49bf-48f4-81ab-97a72fd7a41f"
    //                                     ],
    //                                     "tcin": "87729831",
    //                                     "primary_image_url": "https://target.scene7.com/is/image/Target/GUEST_f954703e-9807-4438-8a2f-6519a08bf32c",
    //                                     "swatch_image_url": "https://target.scene7.com/is/image/Target/GUEST_61e02757-0cea-49fc-bdb2-711ba186ab6c"
    //                                 }
    //                             },
    //                             {
    //                                 "value": "10wd",
    //                                 "first_child": {
    //                                     "alternate_image_urls": [
    //                                         "https://target.scene7.com/is/image/Target/GUEST_0d40913f-31b6-4a86-9378-29bdde349daf",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_381afac5-cb12-4f29-bb56-3535744eb574",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_90dc6b35-9e0b-4e0d-900e-a00ae6923dba",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_de059169-8256-4b56-8c60-5841ced7a99d",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_deb79b90-2931-430f-a53d-0cd3ed9cd55d",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_82243d05-8d63-4920-9e24-412185e764f3",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_d985ac7c-2031-44a7-b50c-701566e08962",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_49b9c752-491c-41a3-954b-3bf38dc62578"
    //                                     ],
    //                                     "tcin": "87729834",
    //                                     "primary_image_url": "https://target.scene7.com/is/image/Target/GUEST_f954703e-9807-4438-8a2f-6519a08bf32c",
    //                                     "swatch_image_url": "https://target.scene7.com/is/image/Target/GUEST_94e6ce2e-df6f-495d-8dd8-32e9d34e26e8"
    //                                 }
    //                             },
    //                             {
    //                                 "value": "11",
    //                                 "first_child": {
    //                                     "alternate_image_urls": [
    //                                         "https://target.scene7.com/is/image/Target/GUEST_fe2148ae-d07e-4326-a54d-4ad9485bda45",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_5419964b-81ff-46b3-97cb-06592d4e0ac8",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_dcd47916-1cd5-4b99-a4a7-0b2dde253268",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_aeaf10b0-e0c9-49ae-b5e1-2727d6ad4668",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_4db25af4-7a4d-413b-9064-849b987ca7b4",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_fa2fd4fd-1b5c-4bfe-a89f-31b3dc218a50",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_da784a39-60ad-43a0-b3eb-2e861f793a1d",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_ebdaa1d3-fe56-4dd2-8adf-12d19188b049"
    //                                     ],
    //                                     "tcin": "87729837",
    //                                     "primary_image_url": "https://target.scene7.com/is/image/Target/GUEST_f954703e-9807-4438-8a2f-6519a08bf32c",
    //                                     "swatch_image_url": "https://target.scene7.com/is/image/Target/GUEST_f90b52a1-2a1d-4104-a2c1-1c365e993676"
    //                                 }
    //                             },
    //                             {
    //                                 "value": "11wd",
    //                                 "first_child": {
    //                                     "alternate_image_urls": [
    //                                         "https://target.scene7.com/is/image/Target/GUEST_b57cc651-5b55-4353-bbca-eb39a9672407",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_f0cf1b7b-0b3d-468a-8f01-a73a391d40f6",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_a97ea5b2-a471-4852-a7de-89a44537726c",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_d79fd0d1-2a59-45db-a645-5e8bd6d5c09d",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_9068c14d-2bfa-4d6d-b8d0-9c7798cb8f80",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_2a382755-1a55-4aeb-bf50-6ad45931da42",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_7a8c39e2-5df1-474a-91b6-6f1f85dfbb22",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_877f278f-6ddd-4a58-ab4e-368173cb4f87"
    //                                     ],
    //                                     "tcin": "87729840",
    //                                     "primary_image_url": "https://target.scene7.com/is/image/Target/GUEST_f954703e-9807-4438-8a2f-6519a08bf32c",
    //                                     "swatch_image_url": "https://target.scene7.com/is/image/Target/GUEST_3aa98fc0-78b1-4dd9-b98a-098b18ac5e1b"
    //                                 }
    //                             },
    //                             {
    //                                 "value": "12",
    //                                 "first_child": {
    //                                     "alternate_image_urls": [
    //                                         "https://target.scene7.com/is/image/Target/GUEST_f4dfaff7-9bf0-4eb7-9512-4659f2b73793",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_b5b07d8e-e1f1-429a-8a20-01f0e7442486",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_4de7b7c5-9707-492f-adc3-87b79a94812b",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_b04023ac-fbe7-4d87-a14b-a8bd91ec9d74",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_2527504f-fb2e-4278-835b-cddec6c04d6b",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_026efa28-ad4d-420e-838e-9f7792b41cfc",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_25abd12c-902f-4ae3-8885-97bdded4cd14",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_b4350134-c11a-4aa4-b7b1-8588f5fe8f31"
    //                                     ],
    //                                     "tcin": "87729843",
    //                                     "primary_image_url": "https://target.scene7.com/is/image/Target/GUEST_f954703e-9807-4438-8a2f-6519a08bf32c",
    //                                     "swatch_image_url": "https://target.scene7.com/is/image/Target/GUEST_3539ce21-4ff0-4208-95ba-8b5542c19ae1"
    //                                 }
    //                             },
    //                             {
    //                                 "value": "12w",
    //                                 "first_child": {
    //                                     "alternate_image_urls": [
    //                                         "https://target.scene7.com/is/image/Target/GUEST_9735a9a9-8b3d-40af-9f6a-dc7c82f98656",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_bd73a2f5-4611-4191-9bae-b5b52e494a1c",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_e8a05088-c5d6-4100-a6e7-1733728c7639",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_71b2db5b-5a5d-4849-bde8-9509384926e2",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_2e7701ee-c102-49ee-9434-8a4f157f35f9",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_fa2fd4fd-1b5c-4bfe-a89f-31b3dc218a50",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_fc255000-1735-4bbe-a93f-5f8d571422f1",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_ffeff244-65c4-40c4-9149-bbc228403b0c"
    //                                     ],
    //                                     "tcin": "87729846",
    //                                     "primary_image_url": "https://target.scene7.com/is/image/Target/GUEST_f954703e-9807-4438-8a2f-6519a08bf32c",
    //                                     "swatch_image_url": "https://target.scene7.com/is/image/Target/GUEST_c7841c10-2872-4ed6-9c76-bdeb5d89e8b7"
    //                                 }
    //                             },
    //                             {
    //                                 "value": "6.5w",
    //                                 "first_child": {
    //                                     "alternate_image_urls": [
    //                                         "https://target.scene7.com/is/image/Target/GUEST_5f499086-8034-4e27-b328-1f1a20e2f548",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_d8eed4a7-f308-4155-8d8f-1f7fc6ea8ded",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_15a589d8-0797-4d85-890f-d962ea2956c7",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_6c91d340-29d1-494d-9465-3613867b57f1",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_b74f3d59-f697-4981-bf2c-f3e9be7eb00f",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_1ff613eb-8518-45a7-9c68-f7592c1c2d4a",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_a9d665fd-bfe2-4acf-a0d7-042fbb5b9991",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_6cc9b210-975f-4f06-9b7c-36290d4a901e"
    //                                     ],
    //                                     "tcin": "87729864",
    //                                     "primary_image_url": "https://target.scene7.com/is/image/Target/GUEST_9cd11797-3809-4a5a-a077-682903bc734c",
    //                                     "swatch_image_url": "https://target.scene7.com/is/image/Target/GUEST_749afe05-467a-42b8-9748-dfce5c340a15"
    //                                 }
    //                             },
    //                             {
    //                                 "value": "7.5w",
    //                                 "first_child": {
    //                                     "alternate_image_urls": [
    //                                         "https://target.scene7.com/is/image/Target/GUEST_5f499086-8034-4e27-b328-1f1a20e2f548",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_d8eed4a7-f308-4155-8d8f-1f7fc6ea8ded",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_15a589d8-0797-4d85-890f-d962ea2956c7",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_6c91d340-29d1-494d-9465-3613867b57f1",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_b74f3d59-f697-4981-bf2c-f3e9be7eb00f",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_1ff613eb-8518-45a7-9c68-f7592c1c2d4a",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_a9d665fd-bfe2-4acf-a0d7-042fbb5b9991",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_a0b46200-bb33-4f19-94ae-9ff4a736f299"
    //                                     ],
    //                                     "tcin": "87729878",
    //                                     "primary_image_url": "https://target.scene7.com/is/image/Target/GUEST_9cd11797-3809-4a5a-a077-682903bc734c",
    //                                     "swatch_image_url": "https://target.scene7.com/is/image/Target/GUEST_c4a4bbbb-eb46-479e-981d-cf0558d75565"
    //                                 }
    //                             },
    //                             {
    //                                 "value": "8.5w",
    //                                 "first_child": {
    //                                     "alternate_image_urls": [
    //                                         "https://target.scene7.com/is/image/Target/GUEST_5f499086-8034-4e27-b328-1f1a20e2f548",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_d8eed4a7-f308-4155-8d8f-1f7fc6ea8ded",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_15a589d8-0797-4d85-890f-d962ea2956c7",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_6c91d340-29d1-494d-9465-3613867b57f1",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_b74f3d59-f697-4981-bf2c-f3e9be7eb00f",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_1ff613eb-8518-45a7-9c68-f7592c1c2d4a",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_a9d665fd-bfe2-4acf-a0d7-042fbb5b9991",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_ef7e8d26-298e-4908-a54a-99480b220df2"
    //                                     ],
    //                                     "tcin": "87729890",
    //                                     "primary_image_url": "https://target.scene7.com/is/image/Target/GUEST_9cd11797-3809-4a5a-a077-682903bc734c",
    //                                     "swatch_image_url": "https://target.scene7.com/is/image/Target/GUEST_fea5a877-03f5-407c-9908-408447525602"
    //                                 }
    //                             },
    //                             {
    //                                 "value": "9.5w",
    //                                 "first_child": {
    //                                     "alternate_image_urls": [
    //                                         "https://target.scene7.com/is/image/Target/GUEST_5f499086-8034-4e27-b328-1f1a20e2f548",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_d8eed4a7-f308-4155-8d8f-1f7fc6ea8ded",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_15a589d8-0797-4d85-890f-d962ea2956c7",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_6c91d340-29d1-494d-9465-3613867b57f1",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_b74f3d59-f697-4981-bf2c-f3e9be7eb00f",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_1ff613eb-8518-45a7-9c68-f7592c1c2d4a",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_a9d665fd-bfe2-4acf-a0d7-042fbb5b9991",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_6ad671e0-69f2-4cb6-88e3-d6ec0f3a5763"
    //                                     ],
    //                                     "tcin": "87729903",
    //                                     "primary_image_url": "https://target.scene7.com/is/image/Target/GUEST_9cd11797-3809-4a5a-a077-682903bc734c",
    //                                     "swatch_image_url": "https://target.scene7.com/is/image/Target/GUEST_ebd761da-ceb8-4d05-950f-4be6ffa7348b"
    //                                 }
    //                             },
    //                             {
    //                                 "value": "11w",
    //                                 "first_child": {
    //                                     "alternate_image_urls": [
    //                                         "https://target.scene7.com/is/image/Target/GUEST_5f499086-8034-4e27-b328-1f1a20e2f548",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_d8eed4a7-f308-4155-8d8f-1f7fc6ea8ded",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_15a589d8-0797-4d85-890f-d962ea2956c7",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_6c91d340-29d1-494d-9465-3613867b57f1",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_b74f3d59-f697-4981-bf2c-f3e9be7eb00f",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_1ff613eb-8518-45a7-9c68-f7592c1c2d4a",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_a9d665fd-bfe2-4acf-a0d7-042fbb5b9991",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_a41470d1-f62e-4368-84e1-ac1c712d7b0d"
    //                                     ],
    //                                     "tcin": "87729914",
    //                                     "primary_image_url": "https://target.scene7.com/is/image/Target/GUEST_cce6531b-e898-499c-a4a6-b189fd391b4f",
    //                                     "swatch_image_url": "https://target.scene7.com/is/image/Target/GUEST_41d47d54-a518-4fc2-9710-63d561c735e3"
    //                                 }
    //                             },
    //                             {
    //                                 "value": "5.5w",
    //                                 "first_child": {
    //                                     "alternate_image_urls": [
    //                                         "https://target.scene7.com/is/image/Target/GUEST_4339096a-d675-4b53-88a6-a10878233c0b",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_e4825eb7-6e18-48fa-b47f-496902188982",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_e00ac9d2-f995-41ed-8073-11397694812d",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_b2f0f06e-ae0d-440d-9f57-8e71e38326b8",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_73f25330-8f34-4c56-95d4-3cf6151489c8",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_f5524489-aa23-4943-9958-a5cc83e6d247",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_919c1809-8e4d-42b9-8a4a-a2617bab6fb2",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_391d8e31-866d-4c77-8118-304dffc4bcb3"
    //                                     ],
    //                                     "tcin": "87729926",
    //                                     "primary_image_url": "https://target.scene7.com/is/image/Target/GUEST_c9b58450-b38c-4280-a112-063c5fdccf9d",
    //                                     "swatch_image_url": "https://target.scene7.com/is/image/Target/GUEST_ff8047a2-66c4-4bee-8b65-9aa5fa9cad49"
    //                                 }
    //                             },
    //                             {
    //                                 "value": "12wd",
    //                                 "first_child": {
    //                                     "alternate_image_urls": [
    //                                         "https://target.scene7.com/is/image/Target/GUEST_03e4f202-60ea-4670-92f2-af154b4636d5",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_d873d628-b998-4564-8299-2b88488ae50c",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_0ea28af8-c00d-405b-9ce4-73453ad6ab20",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_791aee73-ae5f-475f-8607-94e16f65cc22",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_ba3f0021-f0d3-40fd-8afc-2730f4830b53",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_2c702e1e-4a46-4c68-b8ed-4409402324f6",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_772dd2a8-9b46-41c5-b133-530a79e3dca4",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_6ecca719-6d4b-42d9-9deb-0339edb3d04d"
    //                                     ],
    //                                     "tcin": "87730061",
    //                                     "primary_image_url": "https://target.scene7.com/is/image/Target/GUEST_168f1324-ce61-40b1-8775-ab3fb9d1614b",
    //                                     "swatch_image_url": "https://target.scene7.com/is/image/Target/GUEST_c4b76afe-50cc-49bd-ab89-778e33ac3990"
    //                                 }
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "has_swatch": true,
    //                         "name": "color",
    //                         "swatches": [
    //                             {
    //                                 "value": "black",
    //                                 "first_child": {
    //                                     "alternate_image_urls": [
    //                                         "https://target.scene7.com/is/image/Target/GUEST_6a0a2908-0072-416b-af9e-619b1e87259e",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_397edc03-6d39-45c5-91d3-810ff8896da9",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_54fb8e32-fb23-4ff9-93f3-21392674eca5",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_e4a7dca6-1ab7-4b79-ac60-06c79a68e4fa",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_9e2fad45-633c-423a-96f1-04fd9d7efafb",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_ac9e2317-5d92-4356-963b-992606ee26dd",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_cdb9fc63-909f-4789-ba4a-5051458f9ee7",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_781f14b6-0e61-4500-a69a-8b5479c70c8e"
    //                                     ],
    //                                     "tcin": "87729773",
    //                                     "primary_image_url": "https://target.scene7.com/is/image/Target/GUEST_f954703e-9807-4438-8a2f-6519a08bf32c",
    //                                     "swatch_image_url": "https://target.scene7.com/is/image/Target/GUEST_12d635d0-bd82-4a0a-95fc-7cf307567a09"
    //                                 }
    //                             },
    //                             {
    //                                 "value": "blue",
    //                                 "first_child": {
    //                                     "alternate_image_urls": [
    //                                         "https://target.scene7.com/is/image/Target/GUEST_f317845c-e59a-43dc-8740-44a63a7e8608",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_b4edd234-3514-4bc6-b5ce-d11d840ad0d0",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_1dfc24fa-f485-49c0-bacc-66b7d5c9eed2",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_1fad0694-cc0d-46c3-bbd2-4e06525fdebb",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_a7548456-f9d0-4283-8178-ca462ed63c59",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_d966f55f-cd65-4388-9ff2-d0091361fc2f",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_d519441b-0355-4285-a465-ce835815708f",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_bfff2556-4d32-4bbb-b871-c6ef83ffa0ab"
    //                                     ],
    //                                     "tcin": "87729849",
    //                                     "primary_image_url": "https://target.scene7.com/is/image/Target/GUEST_8877ca23-5ac4-4b85-a431-ec17347ad912",
    //                                     "swatch_image_url": "https://target.scene7.com/is/image/Target/GUEST_61300955-f49b-46d4-a0a1-796d571f9eb3"
    //                                 }
    //                             },
    //                             {
    //                                 "value": "cognac",
    //                                 "first_child": {
    //                                     "alternate_image_urls": [
    //                                         "https://target.scene7.com/is/image/Target/GUEST_4f50174c-4eef-4fb5-9ec0-d2d3974a3369",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_e4825eb7-6e18-48fa-b47f-496902188982",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_e00ac9d2-f995-41ed-8073-11397694812d",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_3db54669-a80d-44bc-a1f9-3884d9486479",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_c85965a4-6100-4c8d-9efa-dae991544d7e",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_0a0d44b0-2f57-48b7-925a-2e0965fe7e62",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_19b4cf7c-ea66-4044-80b8-e6cb31fd53f2",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_226c18f5-45fa-45cc-9ece-61467ddaa6f6"
    //                                     ],
    //                                     "tcin": "87729923",
    //                                     "primary_image_url": "https://target.scene7.com/is/image/Target/GUEST_c9b58450-b38c-4280-a112-063c5fdccf9d",
    //                                     "swatch_image_url": "https://target.scene7.com/is/image/Target/GUEST_8a0a4ccf-a4a9-48c1-a04c-021b47f10ee2"
    //                                 }
    //                             },
    //                             {
    //                                 "value": "green",
    //                                 "first_child": {
    //                                     "alternate_image_urls": [
    //                                         "https://target.scene7.com/is/image/Target/GUEST_cac1112c-3805-478b-8e9b-ce5b309db0a1",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_5ff0cd3d-7c0d-445a-8a05-8a3ed7499d23",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_7e59a8b5-1c9e-4cc2-99c6-c8b7ae7a52ba",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_31260609-947e-443f-9461-c80987545bb0",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_c6c1e3bd-f437-41ac-9e92-ebfc64dd9aea",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_24e26f04-7af3-47a7-8d0b-f958949d6c6d",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_6beee7c8-1565-48e2-9d75-8a82e61b550a",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_f6ab29bd-3718-4d54-b6da-68450edd1cd4"
    //                                     ],
    //                                     "tcin": "87729995",
    //                                     "primary_image_url": "https://target.scene7.com/is/image/Target/GUEST_168f1324-ce61-40b1-8775-ab3fb9d1614b",
    //                                     "swatch_image_url": "https://target.scene7.com/is/image/Target/GUEST_18c93026-af96-45b7-80bf-af32b60d8518"
    //                                 }
    //                             },
    //                             {
    //                                 "value": "grey",
    //                                 "first_child": {
    //                                     "alternate_image_urls": [
    //                                         "https://target.scene7.com/is/image/Target/GUEST_ec6fdd35-110a-4726-b3e2-8e4ae6d36a77",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_81edeacf-8b30-41fc-a10d-281fbf003359",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_3045afe9-152c-446b-903e-8f7479fa26a4",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_8a6c01fb-4cf9-46f6-80a3-7472429a534e",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_3afc8571-771a-4ccf-9c22-4879f9c2be31",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_5666f1b0-f81f-425b-9e52-48364dc7da19",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_e083f54b-d3e9-4927-8b11-3f21eaf906ef",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_de7e40ed-64c0-4871-b0d5-9735a9533e93"
    //                                     ],
    //                                     "tcin": "87730064",
    //                                     "primary_image_url": "https://target.scene7.com/is/image/Target/GUEST_164023ea-b254-4dd8-8c07-b44e01e375fc",
    //                                     "swatch_image_url": "https://target.scene7.com/is/image/Target/GUEST_0340a142-2281-4e01-a916-0e4c0c7712ed"
    //                                 }
    //                             },
    //                             {
    //                                 "value": "nude",
    //                                 "first_child": {
    //                                     "alternate_image_urls": [
    //                                         "https://target.scene7.com/is/image/Target/GUEST_76832827-8345-4e36-8c28-d953c3b873ef",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_dec04416-b2a0-4002-bbeb-0d8b99a34c16",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_078c9ba5-dfb0-4176-8720-df9c40be37e9",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_188be073-b71a-4f4e-b725-13721c53cbe9",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_88006a99-7de7-4d2d-9a74-0ac3ae3a9ef5",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_1035735c-02dd-4f45-a523-3b25dcd245b4",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_64eb666f-dcb0-4e45-9bfc-4022be2a88e1",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_ac128481-4c0b-42e7-a92c-a7f1056c7d5c"
    //                                     ],
    //                                     "tcin": "87730107",
    //                                     "primary_image_url": "https://target.scene7.com/is/image/Target/GUEST_84c0c98a-f7ec-4a93-bb0a-b9cf802e77b5",
    //                                     "swatch_image_url": "https://target.scene7.com/is/image/Target/GUEST_50a041a6-633d-4cb5-9ef5-8f49e0551762"
    //                                 }
    //                             },
    //                             {
    //                                 "value": "wine",
    //                                 "first_child": {
    //                                     "alternate_image_urls": [
    //                                         "https://target.scene7.com/is/image/Target/GUEST_027e2dc4-14fa-40e2-a6d0-d1e316da48ba",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_3947b129-0fd6-4083-9214-8a1cf25ee9d7",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_b4a17a04-5d6c-4996-aa71-94f72596b4ec",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_6e59aac4-5a28-4208-b21f-3470957bb5c7",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_af1e6c94-9b53-4177-bd74-149d948be487",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_76c7b035-8165-44c8-8a75-a2d3543eeb65",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_2b16100e-8cb4-455f-93ef-5574fbb7b91a",
    //                                         "https://target.scene7.com/is/image/Target/GUEST_2c2acd75-4943-4658-9819-e182d745fa63"
    //                                     ],
    //                                     "tcin": "87730155",
    //                                     "primary_image_url": "https://target.scene7.com/is/image/Target/GUEST_aed02c9c-4999-446c-8638-42eba9180179",
    //                                     "swatch_image_url": "https://target.scene7.com/is/image/Target/GUEST_3b727928-7d83-4acc-befe-a435469b5ded"
    //                                 }
    //                             }
    //                         ]
    //                     }
    //                 ]
    //             }
    //         },
    //         "tcin": "87730128",
    //         "original_tcin": "87730128",
    //         "item": {
    //             "product_vendors": [
    //                 {
    //                     "vendor_name": "Journee Collection",
    //                     "id": "10010160"
    //                 }
    //             ],
    //             "enrichment": {
    //                 "images": {
    //                     "alternate_image_urls": [
    //                         "https://target.scene7.com/is/image/Target/GUEST_73852405-5f4f-42be-9c5c-1e1a83f827aa",
    //                         "https://target.scene7.com/is/image/Target/GUEST_65258a48-c480-4507-a56a-9eaecda64cf0",
    //                         "https://target.scene7.com/is/image/Target/GUEST_40366396-bb64-47c6-8ed6-4f12ee45d1e0",
    //                         "https://target.scene7.com/is/image/Target/GUEST_db2876ad-9af7-4163-befb-72aeb8df52aa",
    //                         "https://target.scene7.com/is/image/Target/GUEST_71865a2b-6059-4e78-92b5-e7de77e6d1cf",
    //                         "https://target.scene7.com/is/image/Target/GUEST_eb81f701-7b6a-47b5-a84f-9a53cd4c2e7b",
    //                         "https://target.scene7.com/is/image/Target/GUEST_61f12cd8-5aa5-4296-9fed-3460eac55545",
    //                         "https://target.scene7.com/is/image/Target/GUEST_460aef49-debd-4c28-b01e-8b685fe6e49c"
    //                     ],
    //                     "primary_image_url": "https://target.scene7.com/is/image/Target/GUEST_f3579556-2881-4396-a26a-278bb97436ca"
    //                 },
    //                 "buy_url": "https://www.target.com/p/journee-collection-womens-jezlin-slip-on-almond-toe-ballet-flats-nude-8/-/A-87730128",
    //                 "videos": [
    //                     {
    //                         "is_list_page_eligible": false,
    //                         "video_files": [
    //                             {
    //                                 "video_url": "https://target.scene7.com/is/content/Target/GUEST_1b3330e2-d2aa-490c-8921-15f19d98710d_Flash9_Autox720p_2600k",
    //                                 "mime_type": "video/mp4"
    //                             }
    //                         ]
    //                     }
    //                 ]
    //             },
    //             "relationship_type": "Variation Child",
    //             "relationship_type_code": "VC",
    //             "compliance": {},
    //             "primary_brand": {
    //                 "linking_id": "5uyhn",
    //                 "name": "Journee Collection",
    //                 "canonical_url": "/b/journee-collection/-/N-5uyhn"
    //             },
    //             "fulfillment": {
    //                 "is_marketplace": true
    //             },
    //             "product_description": {
    //                 "soft_bullets": {
    //                     "bullets": [
    //                         "Upper Material: Faux Suede",
    //                         "Toe Style: Almond",
    //                         "Heel Height/Type: 1/2-in Block Heel",
    //                         "Closure Type: Slip-on",
    //                         "Footbed: Padded"
    //                     ]
    //                 },
    //                 "bullet_descriptions": [
    //                     "<B>Sizing:</B> Womens",
    //                     "<B>Care and Cleaning:</B> Spot or Wipe Clean",
    //                     "<B>Footwear Lining Material:</B> Man Made Materials",
    //                     "<B>Footwear Insole Material:</B> Man Made Materials",
    //                     "<B>Features:</B> Slip On",
    //                     "<B>Toe Style:</B> Almond Toe",
    //                     "<B>Heel:</B> Approximately 0.5 Inches Block Heel",
    //                     "<B>Footwear toe openness:</B> Closed Toe",
    //                     "<B>Footwear upper material 1:</B> Faux Leather",
    //                     "<B>Shoe Width:</B> Medium",
    //                     "<B>Footwear outsole material 1:</B> Man Made Materials"
    //                 ],
    //                 "title": "Journee Collection Womens Jezlin Slip On Almond Toe Ballet Flats, Nude 8"
    //             },
    //             "merchandise_classification": {
    //                 "department_id": 96,
    //                 "class_id": 21
    //             },
    //             "cart_add_on_threshold": 35
    //         },
    //         "promotions": [],
    //         "price": {
    //             "formatted_comparison_price": "$64.99",
    //             "formatted_comparison_price_type": "reg",
    //             "formatted_current_price": "$38.99",
    //             "location_id": 3991,
    //             "formatted_current_price_type": "sale"
    //         },
    //         "__typename": "ProductSummary"
    //     };
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className="container mx-auto">
            <Carousel 
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={ true }
                autoPlaySpeed={1000}
            >
                {query.item.enrichment.images.alternate_image_urls.map((p, index) => 
                    <div>
                        <img src={p} alt={query.item.product_vendors[0].vendor_name} />
                    </div>
                )}
            </Carousel>
            <div className="info-title">Name</div>
            <div>
                {query.item.product_vendors[0].vendor_name}
            </div>
            <div className="info-title">Price</div>
            <div>
                {query.price.formatted_current_price}
            </div>
            <div className="info-title">Relationship Type</div>
            <div>
                {query.item.relationship_type}
            </div>
            <div className="info-title">Product Description</div>
            <div>
                {query.item.product_description.title}
                <div>
                    {query.item.product_description.bullet_descriptions.map((p, index) => 
                    <div key={index}>
                        <div dangerouslySetInnerHTML={{ __html: p }}/>
                    </div>
                    )}
                </div>
            </div>
            <a href={query.item.enrichment.buy_url} className="inline-block my-5 px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm">BUY</a>
        </div>
    )
}