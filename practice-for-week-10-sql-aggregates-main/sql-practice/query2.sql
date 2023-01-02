SELECT cats.name ,COUNT(toys.name) FROM toys
  JOIN cats ON (toys.cat_id = cats.id)
  GROUP BY cats.name;

SELECT cats.name ,COUNT(toys.name) FROM toys
  JOIN cats ON (toys.cat_id = cats.id)
  GROUP BY cats.name
  HAVING COUNT(toys.name) >= 2;
