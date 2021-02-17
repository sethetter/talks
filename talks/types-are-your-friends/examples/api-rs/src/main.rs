#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use] extern crate rocket;
#[macro_use] extern crate serde_derive;

use {
    rocket::State,
    rocket_contrib::json::Json,
};

fn main() {
    rocket::ignite()
        .manage(
            AppData {
                shows: vec![
                    Show{id: 1, name: "Westworld".to_string(), seasons: 3},
                    Show{id: 2, name: "Game of Thrones".to_string(), seasons: 9},
                ]
            }
        )
        .mount("/", routes![
            index,
            list_shows,
            create_show,
        ]).launch();
}

// Data!
// ------------------------------------

struct AppData {
    shows: Vec<Show>,
}

impl AppData {
    fn add_show(&mut self, new_show: Show) {
        self.shows.push(new_show);
    }
    fn shows(&self) -> Vec<Show> {
        self.shows.clone()
    }
}

#[derive(Serialize, Deserialize, Clone)]
struct Show {
    id: i32,
    name: String,
    seasons: i32,
}

#[derive(Deserialize)]
struct NewShow {
    name: String,
    seasons: i32,
}

// Routes!
// ------------------------------------

#[get("/")]
fn index() -> &'static str {
    "Hello!"
}

#[get("/shows")]
fn list_shows(data: State<AppData>) -> Json<Vec<Show>> {
    Json(data.shows.clone())
}

// Store list of shows in memory, append to it to create a new show.
#[post("/shows", format = "application/json", data = "<show>")]
fn create_show(data: State<AppData>, show: Json<NewShow>) -> Json<Show> {
    let input_show = show.into_inner();

    let new_show = Show {
        id: next_id(data.shows()),
        name: input_show.name,
        seasons: input_show.seasons,
    };

    data.add_show(new_show.clone());

    Json(new_show.clone())
}

// Helpers!
// --------------------------

fn next_id(shows: Vec<Show>) -> i32 {
    match shows.into_iter().map(|s| s.id).max() {
        Some(id) => id + 1,
        None => 1,
    }
}