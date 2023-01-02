INSERT INTO toys (name, cat_id)
SELECT 'Cat Bed', id
FROM cats
WHERE birth_year < 2013;

SELECT name
FROM cats
WHERE id IN (
  SELECT cat_id
  FROM toys
  WHERE
    name = 'Cat Bed'
);
