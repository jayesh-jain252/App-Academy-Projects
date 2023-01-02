.headers on

SELECT musicians.first_name,instruments.type FROM musician_instruments
  JOIN musicians ON (musician_instruments.musician_id = musicians.id)
  JOIN instruments ON (musician_instruments.instrument_id = instruments.id);

SELECT musicians.first_name,musicians.last_name FROM musician_instruments
  JOIN musicians ON (musician_instruments.musician_id = musicians.id)
  JOIN instruments ON (musician_instruments.instrument_id = instruments.id) WHERE instruments.type = 'piano';
