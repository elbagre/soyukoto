# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170223233409) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cards", force: :cascade do |t|
    t.integer  "deck_id",                null: false
    t.integer  "item_id",                null: false
    t.string   "item_type",              null: false
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
    t.integer  "grade",      default: 0
  end

  create_table "decks", force: :cascade do |t|
    t.string   "name",        null: false
    t.string   "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "hiraganas", force: :cascade do |t|
    t.string   "kana"
    t.string   "syllable"
    t.integer  "group",      null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "hiraganas", ["kana", "group"], name: "index_hiraganas_on_kana_and_group", using: :btree
  add_index "hiraganas", ["kana", "syllable"], name: "index_hiraganas_on_kana_and_syllable", using: :btree
  add_index "hiraganas", ["kana"], name: "index_hiraganas_on_kana", using: :btree

  create_table "katakanas", force: :cascade do |t|
    t.string   "kana"
    t.string   "syllable"
    t.integer  "group",      null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "katakanas", ["kana", "group"], name: "index_katakanas_on_kana_and_group", using: :btree
  add_index "katakanas", ["kana", "syllable"], name: "index_katakanas_on_kana_and_syllable", using: :btree
  add_index "katakanas", ["kana"], name: "index_katakanas_on_kana", using: :btree

  create_table "searchables", force: :cascade do |t|
    t.string   "translation",     default: ""
    t.string   "transliteration",              null: false
    t.integer  "item_id",                      null: false
    t.string   "item_type",                    null: false
    t.datetime "created_at",                   null: false
    t.datetime "updated_at",                   null: false
  end

  add_index "searchables", ["item_id", "item_type"], name: "index_searchables_on_item_id_and_item_type", unique: true, using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",           null: false
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
