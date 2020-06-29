CREATE DATABASE recipes_library;

USE recipes_library;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE cat_sexo(
    id serial PRIMARY KEY,
    descripcion VARCHAR(255) NOT NULL
);

CREATE TABLE accounts(
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    nombre VARCHAR(255) NOT NULL,
    apellido_paterno VARCHAR(255) NOT NULL,
    apellido_materno VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    telefono_celular VARCHAR(15),
    sexo_id INTEGER,
    edad INTEGER,
    alergias TEXT[],
    usuario VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    activo BOOLEAN NOT NULL DEFAULT FALSE,
    fecha_creacion timestamp without time zone DEFAULT (now())::timestamp without time zone NOT NULL,
    FOREIGN KEY (sexo_id) REFERENCES cat_sexo (id)
);

CREATE TABLE recipes(
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4()
    nombre VARCHAR(255) NOT NULL,
    ingredientes TEXT[] NOT NULL,
    pasos TEXT[] NOT NULL,
    tiempo_estimado VARCHAR(20),
    tipo VARCHAR(255),
    origen VARCHAR(255),
    account_id uuid,
    fecha_creacion timestamp without time zone DEFAULT (now())::timestamp without time zone NOT NULL,
    FOREIGN KEY (account_id) REFERENCES accounts (id)
);

CREATE TABLE saved_recipes(
    account_id uuid NOT NULL,
    recipe_id uuid NOT NULL,
    fecha_creacion timestamp without time zone DEFAULT (now())::timestamp without time zone NOT NULL,
    PRIMARY KEY (account_id, recipe_id)
    FOREIGN KEY (account_id) REFERENCES accounts (id) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (recipe_id) REFERENCES recipes (id) ON UPDATE CASCADE ON DELETE CASCADE,
);