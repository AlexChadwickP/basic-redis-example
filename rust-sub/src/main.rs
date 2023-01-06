extern crate redis;
use redis::{Commands, PubSubCommands};
use std::env;

fn subscribe_to_test_channel() -> redis::RedisResult<isize> {
    let client = redis::Client::open(env::var("REDIS_URL").expect("Expected REDIS_URL to be set"))?;

    let mut con = client.get_connection()?;
    let mut pubsub = con.as_pubsub();

    pubsub.subscribe("test")?;

    loop {
        let msg = pubsub.get_message()?;
        let payload: String = msg.get_payload()?;
        println!("channel '{}': {}", msg.get_channel_name(), payload);
    }
}

fn main() {
    subscribe_to_test_channel();
}
