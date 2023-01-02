.headers on

SELECT name
FROM toys
WHERE cat_id IN (
    SELECT id
    FROM cats
    WHERE
        name = 'Garfield'
);

INSERT INTO toys (name, cat_id)
VALUES (
    'Pepperoni',
    (
        SELECT id
        FROM cats
        WHERE name='Garfield'
    )
);

SELECT name
FROM toys
WHERE cat_id IN (
    SELECT id
    FROM cats
    WHERE
        name = 'Garfield'
);
