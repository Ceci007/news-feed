import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./_card.scss";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    height: "100%"
  },
  media: {
    height: 140
  }
});
/* news_id": 132474,
    "url": "http://www.minutouno.com/notas/1545474-barassi-hablo-la-polemica-frase-jimena-baron",
    "title": "Barassi habló tras la polémica frase de Jimena Barón",
    "date": 1491667560,
    "source_id": 11,
    "img_url": "http://static.minutouno.com/adjuntos/150/imagenes/011/341/0011341382.jpg",
    "reactions_count": 0,
    "content_views_count": 0,
    "bayes_category_id": null,
    "source_name": "MinutoUno",
    "category": null,
    "reactions": [ */

function MediaCard({ data }) {
  const { url, title, img_url, source_name } = data;
  const classes = useStyles();

  return (
    <Card className={`${classes.card} card`}>
      <CardActionArea>
        <CardMedia className={classes.media} image={img_url} title={title} />
        <CardContent>
          <Typography gutterBottom variant="body1" component="h6">
            {title}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {source_name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div className="card-footer">
          <Button
            variant="contained"
            color="secondary"
            className={`${classes.button} button`}
          >
            <a href={url} target="_blank" className="white-anchor">
              Ver más
            </a>
          </Button>
        </div>
      </CardActions>
    </Card>
  );
}

export default MediaCard;
