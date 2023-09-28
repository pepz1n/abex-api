CREATE TABLE address(
    id SERIAL PRIMARY KEY NOT NULL,
    country VARCHAR(50) NOT NULL,
    state VARCHAR(50) NOT NULL,
    city VARCHAR(50) NOT NULL,
    neighborhood VARCHAR(50) NOT NULL,
    street VARCHAR(50) NOT NULL,
    postal_code NUMERIC(8,0) NOT NULL
);

CREATE TABLE institution(
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(100) NOT NULL,
    document_number VARCHAR(18) NOT NULL UNIQUE,
    address_id INTEGER,
    CONSTRAINT fk_address_to_institution FOREIGN KEY(address_id) REFERENCES address(id)
);

CREATE TABLE contact(
    id SERIAL PRIMARY KEY NOT NULL,
    type VARCHAR(15) NOT NULL,
    value VARCHAR(100) NOT NULL UNIQUE,
    institution_id INTEGER,
    CONSTRAINT fk_institution_to_contact FOREIGN KEY(institution_id) REFERENCES institution(id)
);

CREATE TABLE person_account(
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(100) NOT NULL,
    document_number VARCHAR(18) NOT NULL UNIQUE,
    username VARCHAR(50) NOT NULL,
    hash VARCHAR(256) NOT NULL,
    institution_id INTEGER NOT NULL,
    CONSTRAINT fk_intitution_to_person_account FOREIGN KEY(institution_id) REFERENCES institution(id)
);

CREATE TABLE permission(
    id SERIAL PRIMARY KEY NOT NULL,
    solution VARCHAR(100) NOT NULL,
    person_account_id INTEGER NOT NULL,
    CONSTRAINT fk_person_account_to_permission FOREIGN KEY(person_account_id) REFERENCES person_account(id)
);

CREATE TABLE denunciation(
    id SERIAL PRIMARY KEY NOT NULL,
    date DATE NOT NULL,
    status BOOLEAN NOT NULL,
    created_user_id INTEGER NOT NULL,
    responsible_user_id INTEGER NOT NULL,
    CONSTRAINT fk_user_to_denunciation_created FOREIGN KEY(created_user_id) REFERENCES person_account(id),
    CONSTRAINT fk_user_to_denunciation_responsible FOREIGN KEY(responsible_user_id) REFERENCES person_account(id)
);

CREATE TABLE field(
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(40) NOT NULL,
    type VARCHAR(40) NOT NULL,
    options JSON NOT NULL,
    status BOOLEAN NOT NULL
);

Alter table field add column higher integer;

CREATE TABLE response_field(
    id SERIAL PRIMARY KEY NOT NULL,
    value VARCHAR(100) NOT NULL,
    field_id INTEGER NOT NULL,
    denunciation_id INTEGER NOT NULL,
    CONSTRAINT fk_denunciation_to_response_field FOREIGN KEY(denunciation_id) REFERENCES denunciation(id),
    CONSTRAINT fk_field_to_response_field FOREIGN KEY(field_id) REFERENCES field(id)
);





DROP TABLE response_field;
DROP TABLE field;
DROP TABLE denunciation;
DROP TABLE permission;
DROP TABLE person_account;
DROP TABLE contact;
DROP TABLE institution;
DROP TABLE address;