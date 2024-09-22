import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";

function ProductCard({ id,title, category, thumbnail, stock, price }) {
  return (
    <Card style={{backgroundColor:"#fff",width:"14rem"}} sx={{ width: 320, maxWidth: "100%", boxShadow: "lg" }}>
      <CardOverflow>
        <AspectRatio  sx={{ minWidth: 200 }}>
          <img
            src={thumbnail}
            srcSet={thumbnail}
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="body-xs">{category}</Typography>
        <Link
          href={`/products/${id}`}
          color="neutral"
          textColor="text.primary"
          overlay
          sx={{ fontWeight: "md" }}
        >
          {title}
        </Link>

        <Typography
          level="title-lg"
          sx={{ mt: 1, fontWeight: "xl" }}
          endDecorator={
            <Chip component="span" size="sm" variant="soft" color="success">
              Lowest price
            </Chip>
          }
        >
         $ {price}
        </Typography>
        <Typography level="body-sm">
          (Only <b>{stock}</b> left in stock!)
        </Typography>
      </CardContent>
      <CardOverflow>
        <Button variant="solid" color="danger" size="lg">
          Add to cart
        </Button>
      </CardOverflow>
    </Card>
  );
}

export default ProductCard;
