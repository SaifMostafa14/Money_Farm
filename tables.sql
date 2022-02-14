-- create
CREATE TABLE USERS (
  ID INTEGER PRIMARY KEY,
  username TEXT NOT NULL,
  email TEXT NOT NULL,
  password TEXT NOT NULL,
  bankname TEXT NOT NULL,
  CCnumber TEXT NOT NULL,
  cardType TEXT NOT NULL
);

CREATE TABLE TRANSACTIONS(
    id INTEGER,
    TRANSDATE TEXT NOT NULL,
    TRANSAMOUNT TEXT NOT NULL, 
    RECIEVER TEXT NOT NULL,
    CATEGORY TEXT NOT NULL
);


-- insert
INSERT INTO USERS VALUES (0001, 'Toni', 'ironman@gmail.com',
'10000000', 'Bank of America', '4000 2843 5432 4724', 'VISA');
INSERT INTO USERS VALUES (0002, 'Bob', 'bobs@gmail.com', 
'20000000', 'Bank of America', '2434 6000 4654 8729', 'DEBIT');
INSERT INTO USERS VALUES (0003, 'Anne', 'catwoman@yahoo.com',
'30000000', 'Chase', '4000 4638 9876 3219', 'VISA');

INSERT INTO TRANSACTIONS VALUES (0001, '04/08/2022', '$12.00', 'Publix', 'Groceries');
INSERT INTO TRANSACTIONS VALUES (0001, '06/08/2022', '$32.54', 'Walmart', 'Groceries');
INSERT INTO TRANSACTIONS VALUES (0001, '15/08/2022', '$9.99', 'Spotify', 'Subscriptions');

-- fetch 

SELECT * FROM USERS;

SELECT * FROM TRANSACTIONS;
