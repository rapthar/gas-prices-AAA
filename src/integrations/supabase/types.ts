export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      aaa_gas_prices: {
        Row: {
          created_at: string | null
          currency: string | null
          data_type: string | null
          diesel_price: number | null
          diesel_price_original: string | null
          id: string
          last_updated_on_site: string | null
          location_name: string
          metro_data: Json | null
          mid_grade_price: number | null
          mid_grade_price_original: string | null
          premium_price: number | null
          premium_price_original: string | null
          regular_price: number | null
          regular_price_original: string | null
          scrape_successful: boolean | null
          scraped_at: string | null
          source_type: string | null
          source_url: string
          state_code: string | null
          state_name: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          currency?: string | null
          data_type?: string | null
          diesel_price?: number | null
          diesel_price_original?: string | null
          id?: string
          last_updated_on_site?: string | null
          location_name: string
          metro_data?: Json | null
          mid_grade_price?: number | null
          mid_grade_price_original?: string | null
          premium_price?: number | null
          premium_price_original?: string | null
          regular_price?: number | null
          regular_price_original?: string | null
          scrape_successful?: boolean | null
          scraped_at?: string | null
          source_type?: string | null
          source_url: string
          state_code?: string | null
          state_name?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          currency?: string | null
          data_type?: string | null
          diesel_price?: number | null
          diesel_price_original?: string | null
          id?: string
          last_updated_on_site?: string | null
          location_name?: string
          metro_data?: Json | null
          mid_grade_price?: number | null
          mid_grade_price_original?: string | null
          premium_price?: number | null
          premium_price_original?: string | null
          regular_price?: number | null
          regular_price_original?: string | null
          scrape_successful?: boolean | null
          scraped_at?: string | null
          source_type?: string | null
          source_url?: string
          state_code?: string | null
          state_name?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      aaa_metro_prices: {
        Row: {
          created_at: string | null
          currency: string | null
          diesel_price: number | null
          diesel_price_original: string | null
          id: string
          metro_name: string
          mid_grade_price: number | null
          mid_grade_price_original: string | null
          premium_price: number | null
          premium_price_original: string | null
          regular_price: number | null
          regular_price_original: string | null
          scraped_at: string | null
          source_type: string | null
          source_url: string
          state_code: string
          state_name: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          currency?: string | null
          diesel_price?: number | null
          diesel_price_original?: string | null
          id?: string
          metro_name: string
          mid_grade_price?: number | null
          mid_grade_price_original?: string | null
          premium_price?: number | null
          premium_price_original?: string | null
          regular_price?: number | null
          regular_price_original?: string | null
          scraped_at?: string | null
          source_type?: string | null
          source_url: string
          state_code: string
          state_name: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          currency?: string | null
          diesel_price?: number | null
          diesel_price_original?: string | null
          id?: string
          metro_name?: string
          mid_grade_price?: number | null
          mid_grade_price_original?: string | null
          premium_price?: number | null
          premium_price_original?: string | null
          regular_price?: number | null
          regular_price_original?: string | null
          scraped_at?: string | null
          source_type?: string | null
          source_url?: string
          state_code?: string
          state_name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      aaa_scraping_status: {
        Row: {
          created_at: string | null
          currenturl: string | null
          endtime: string | null
          errors: Json | null
          id: number
          isrunning: boolean | null
          processedurls: number | null
          results: Json | null
          starttime: string | null
          totalurls: number | null
        }
        Insert: {
          created_at?: string | null
          currenturl?: string | null
          endtime?: string | null
          errors?: Json | null
          id?: number
          isrunning?: boolean | null
          processedurls?: number | null
          results?: Json | null
          starttime?: string | null
          totalurls?: number | null
        }
        Update: {
          created_at?: string | null
          currenturl?: string | null
          endtime?: string | null
          errors?: Json | null
          id?: number
          isrunning?: boolean | null
          processedurls?: number | null
          results?: Json | null
          starttime?: string | null
          totalurls?: number | null
        }
        Relationships: []
      }
      canada_stations: {
        Row: {
          Address: string | null
          City: string | null
          "Company Name": string | null
          Country: string | null
          Diesel: string | null
          Disclaimer: string | null
          "Gas Price Types": string | null
          Hours: string | null
          "Last Updated": string | null
          last_updated: string | null
          Latitude: number | null
          Longitude: number | null
          numeric_id: number | null
          Phone: string | null
          post_author: string | null
          Premium: string | null
          Regular: string | null
          "State Full": string | null
          "Store Name": string | null
          "Street Address": string | null
          Title: string | null
          Warehouse: string | null
          Web: string | null
          Zipcode: string | null
        }
        Insert: {
          Address?: string | null
          City?: string | null
          "Company Name"?: string | null
          Country?: string | null
          Diesel?: string | null
          Disclaimer?: string | null
          "Gas Price Types"?: string | null
          Hours?: string | null
          "Last Updated"?: string | null
          last_updated?: string | null
          Latitude?: number | null
          Longitude?: number | null
          numeric_id?: number | null
          Phone?: string | null
          post_author?: string | null
          Premium?: string | null
          Regular?: string | null
          "State Full"?: string | null
          "Store Name"?: string | null
          "Street Address"?: string | null
          Title?: string | null
          Warehouse?: string | null
          Web?: string | null
          Zipcode?: string | null
        }
        Update: {
          Address?: string | null
          City?: string | null
          "Company Name"?: string | null
          Country?: string | null
          Diesel?: string | null
          Disclaimer?: string | null
          "Gas Price Types"?: string | null
          Hours?: string | null
          "Last Updated"?: string | null
          last_updated?: string | null
          Latitude?: number | null
          Longitude?: number | null
          numeric_id?: number | null
          Phone?: string | null
          post_author?: string | null
          Premium?: string | null
          Regular?: string | null
          "State Full"?: string | null
          "Store Name"?: string | null
          "Street Address"?: string | null
          Title?: string | null
          Warehouse?: string | null
          Web?: string | null
          Zipcode?: string | null
        }
        Relationships: []
      }
      gas_price_scraper_updates: {
        Row: {
          city: string | null
          country: string
          created_at: string
          currency: string | null
          diesel_price: number | null
          diesel_price_original: string | null
          error_message: string | null
          id: string
          last_updated_on_site: string | null
          premium_price: number | null
          premium_price_original: string | null
          regular_price: number | null
          regular_price_original: string | null
          scrape_date: string | null
          scrape_successful: boolean | null
          scraped_at: string
          source_canada_station_id: number | null
          source_type: string
          source_url: string
          source_us_station_id: number | null
          state_province: string | null
          station_address: string | null
          station_id: string | null
          station_name: string
          updated_at: string
        }
        Insert: {
          city?: string | null
          country: string
          created_at?: string
          currency?: string | null
          diesel_price?: number | null
          diesel_price_original?: string | null
          error_message?: string | null
          id?: string
          last_updated_on_site?: string | null
          premium_price?: number | null
          premium_price_original?: string | null
          regular_price?: number | null
          regular_price_original?: string | null
          scrape_date?: string | null
          scrape_successful?: boolean | null
          scraped_at?: string
          source_canada_station_id?: number | null
          source_type: string
          source_url: string
          source_us_station_id?: number | null
          state_province?: string | null
          station_address?: string | null
          station_id?: string | null
          station_name: string
          updated_at?: string
        }
        Update: {
          city?: string | null
          country?: string
          created_at?: string
          currency?: string | null
          diesel_price?: number | null
          diesel_price_original?: string | null
          error_message?: string | null
          id?: string
          last_updated_on_site?: string | null
          premium_price?: number | null
          premium_price_original?: string | null
          regular_price?: number | null
          regular_price_original?: string | null
          scrape_date?: string | null
          scrape_successful?: boolean | null
          scraped_at?: string
          source_canada_station_id?: number | null
          source_type?: string
          source_url?: string
          source_us_station_id?: number | null
          state_province?: string | null
          station_address?: string | null
          station_id?: string | null
          station_name?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "gas_price_scraper_updates_station_id_fkey"
            columns: ["station_id"]
            isOneToOne: false
            referencedRelation: "stations"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          created_at: string
          id: string
          is_read: boolean
          link: string | null
          message: string
          type: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          is_read?: boolean
          link?: string | null
          message: string
          type: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          is_read?: boolean
          link?: string | null
          message?: string
          type?: string
          user_id?: string | null
        }
        Relationships: []
      }
      price_updates: {
        Row: {
          created_at: string | null
          currency: string | null
          fuel_type: string
          id: string
          price: number | null
          source_scraper_update_id: string | null
          station_id: string
          status: string
          time_spotted: string
          update_time: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          currency?: string | null
          fuel_type: string
          id?: string
          price?: number | null
          source_scraper_update_id?: string | null
          station_id: string
          status?: string
          time_spotted: string
          update_time?: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          currency?: string | null
          fuel_type?: string
          id?: string
          price?: number | null
          source_scraper_update_id?: string | null
          station_id?: string
          status?: string
          time_spotted?: string
          update_time?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "price_updates_source_scraper_update_id_fkey"
            columns: ["source_scraper_update_id"]
            isOneToOne: false
            referencedRelation: "comprehensive_price_data"
            referencedColumns: ["scraper_update_id"]
          },
          {
            foreignKeyName: "price_updates_source_scraper_update_id_fkey"
            columns: ["source_scraper_update_id"]
            isOneToOne: false
            referencedRelation: "gas_price_scraper_updates"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "price_updates_source_scraper_update_id_fkey"
            columns: ["source_scraper_update_id"]
            isOneToOne: false
            referencedRelation: "scraper_price_monitoring"
            referencedColumns: ["scraper_update_id"]
          },
          {
            foreignKeyName: "price_updates_station_id_fkey"
            columns: ["station_id"]
            isOneToOne: false
            referencedRelation: "stations"
            referencedColumns: ["id"]
          },
        ]
      }
      prices: {
        Row: {
          Address: string | null
          City: string | null
          "Company Name": string | null
          Country: string | null
          Diesel: string | null
          Disclaimer: string | null
          "Gas Price Types": string | null
          Hours: string | null
          "Last Updated": string | null
          Latitude: number | null
          Longitude: number | null
          Phone: string | null
          post_author: string | null
          Premium: string | null
          Regular: string | null
          "State Full": string | null
          "Store Name": string | null
          "Street Address": string | null
          Title: string | null
          Warehouse: string | null
          Web: string | null
          Zipcode: string | null
        }
        Insert: {
          Address?: string | null
          City?: string | null
          "Company Name"?: string | null
          Country?: string | null
          Diesel?: string | null
          Disclaimer?: string | null
          "Gas Price Types"?: string | null
          Hours?: string | null
          "Last Updated"?: string | null
          Latitude?: number | null
          Longitude?: number | null
          Phone?: string | null
          post_author?: string | null
          Premium?: string | null
          Regular?: string | null
          "State Full"?: string | null
          "Store Name"?: string | null
          "Street Address"?: string | null
          Title?: string | null
          Warehouse?: string | null
          Web?: string | null
          Zipcode?: string | null
        }
        Update: {
          Address?: string | null
          City?: string | null
          "Company Name"?: string | null
          Country?: string | null
          Diesel?: string | null
          Disclaimer?: string | null
          "Gas Price Types"?: string | null
          Hours?: string | null
          "Last Updated"?: string | null
          Latitude?: number | null
          Longitude?: number | null
          Phone?: string | null
          post_author?: string | null
          Premium?: string | null
          Regular?: string | null
          "State Full"?: string | null
          "Store Name"?: string | null
          "Street Address"?: string | null
          Title?: string | null
          Warehouse?: string | null
          Web?: string | null
          Zipcode?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          created_at: string | null
          display_name: string | null
          id: string
          is_super_admin: boolean | null
          location: string | null
          notify_email: boolean | null
          notify_price_alerts: boolean | null
          notify_promotions: boolean | null
          notify_push: boolean | null
          notify_weekly_report: boolean | null
          phone: string | null
          pref_dark_mode: boolean | null
          pref_default_fuel: string | null
          pref_distance_unit: string | null
          pref_search_radius: number | null
          updated_at: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string | null
          display_name?: string | null
          id: string
          is_super_admin?: boolean | null
          location?: string | null
          notify_email?: boolean | null
          notify_price_alerts?: boolean | null
          notify_promotions?: boolean | null
          notify_push?: boolean | null
          notify_weekly_report?: boolean | null
          phone?: string | null
          pref_dark_mode?: boolean | null
          pref_default_fuel?: string | null
          pref_distance_unit?: string | null
          pref_search_radius?: number | null
          updated_at?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string | null
          display_name?: string | null
          id?: string
          is_super_admin?: boolean | null
          location?: string | null
          notify_email?: boolean | null
          notify_price_alerts?: boolean | null
          notify_promotions?: boolean | null
          notify_push?: boolean | null
          notify_weekly_report?: boolean | null
          phone?: string | null
          pref_dark_mode?: boolean | null
          pref_default_fuel?: string | null
          pref_distance_unit?: string | null
          pref_search_radius?: number | null
          updated_at?: string | null
          website?: string | null
        }
        Relationships: []
      }
      "Scraped URLs": {
        Row: {
          Detail_URL: string | null
          input_params: string | null
          Title: string | null
        }
        Insert: {
          Detail_URL?: string | null
          input_params?: string | null
          Title?: string | null
        }
        Update: {
          Detail_URL?: string | null
          input_params?: string | null
          Title?: string | null
        }
        Relationships: []
      }
      scraped_urls_canada: {
        Row: {
          Detail_URL: string | null
          input_params: string | null
          Title: string | null
        }
        Insert: {
          Detail_URL?: string | null
          input_params?: string | null
          Title?: string | null
        }
        Update: {
          Detail_URL?: string | null
          input_params?: string | null
          Title?: string | null
        }
        Relationships: []
      }
      scraper_runs: {
        Row: {
          completed_at: string | null
          error_count: number | null
          errors: Json | null
          id: string
          region: string
          started_at: string | null
          status: string
          success_count: number | null
          total_urls_processed: number | null
        }
        Insert: {
          completed_at?: string | null
          error_count?: number | null
          errors?: Json | null
          id?: string
          region: string
          started_at?: string | null
          status: string
          success_count?: number | null
          total_urls_processed?: number | null
        }
        Update: {
          completed_at?: string | null
          error_count?: number | null
          errors?: Json | null
          id?: string
          region?: string
          started_at?: string | null
          status?: string
          success_count?: number | null
          total_urls_processed?: number | null
        }
        Relationships: []
      }
      scraper_sources: {
        Row: {
          active: boolean | null
          created_at: string | null
          id: string
          last_scraped_at: string | null
          notes: string | null
          region: string
          scrape_config: Json | null
          url: string
        }
        Insert: {
          active?: boolean | null
          created_at?: string | null
          id?: string
          last_scraped_at?: string | null
          notes?: string | null
          region: string
          scrape_config?: Json | null
          url: string
        }
        Update: {
          active?: boolean | null
          created_at?: string | null
          id?: string
          last_scraped_at?: string | null
          notes?: string | null
          region?: string
          scrape_config?: Json | null
          url?: string
        }
        Relationships: []
      }
      scraping_batches: {
        Row: {
          completed_at: string | null
          created_at: string
          end_station_id: number
          error_message: string | null
          id: string
          new_urls_added: number | null
          start_station_id: number
          started_at: string | null
          status: string
          total_urls_found: number | null
        }
        Insert: {
          completed_at?: string | null
          created_at?: string
          end_station_id: number
          error_message?: string | null
          id?: string
          new_urls_added?: number | null
          start_station_id: number
          started_at?: string | null
          status?: string
          total_urls_found?: number | null
        }
        Update: {
          completed_at?: string | null
          created_at?: string
          end_station_id?: number
          error_message?: string | null
          id?: string
          new_urls_added?: number | null
          start_station_id?: number
          started_at?: string | null
          status?: string
          total_urls_found?: number | null
        }
        Relationships: []
      }
      stations: {
        Row: {
          city: string | null
          country: string
          created_at: string | null
          fuel_types: string[] | null
          hours: string | null
          id: string
          latitude: number | null
          longitude: number | null
          numeric_id: number
          phone: string | null
          state: string | null
          store_name: string | null
          street_address: string | null
          updated_at: string | null
          warehouse_name: string | null
          website: string | null
          zipcode: string | null
        }
        Insert: {
          city?: string | null
          country: string
          created_at?: string | null
          fuel_types?: string[] | null
          hours?: string | null
          id?: string
          latitude?: number | null
          longitude?: number | null
          numeric_id: number
          phone?: string | null
          state?: string | null
          store_name?: string | null
          street_address?: string | null
          updated_at?: string | null
          warehouse_name?: string | null
          website?: string | null
          zipcode?: string | null
        }
        Update: {
          city?: string | null
          country?: string
          created_at?: string | null
          fuel_types?: string[] | null
          hours?: string | null
          id?: string
          latitude?: number | null
          longitude?: number | null
          numeric_id?: number
          phone?: string | null
          state?: string | null
          store_name?: string | null
          street_address?: string | null
          updated_at?: string | null
          warehouse_name?: string | null
          website?: string | null
          zipcode?: string | null
        }
        Relationships: []
      }
      us_stations: {
        Row: {
          Address: string | null
          City: string | null
          "Company Name": string | null
          Country: string | null
          Diesel: string | null
          Disclaimer: string | null
          "Gas Price Types": string | null
          Hours: string | null
          "Last Updated": string | null
          last_updated: string | null
          Latitude: number | null
          Longitude: number | null
          numeric_id: number | null
          Phone: string | null
          post_author: string | null
          Premium: string | null
          Regular: string | null
          "State Full": string | null
          "Store Name": string | null
          "Street Address": string | null
          Title: string | null
          Warehouse: string | null
          Web: string | null
          Zipcode: string | null
        }
        Insert: {
          Address?: string | null
          City?: string | null
          "Company Name"?: string | null
          Country?: string | null
          Diesel?: string | null
          Disclaimer?: string | null
          "Gas Price Types"?: string | null
          Hours?: string | null
          "Last Updated"?: string | null
          last_updated?: string | null
          Latitude?: number | null
          Longitude?: number | null
          numeric_id?: number | null
          Phone?: string | null
          post_author?: string | null
          Premium?: string | null
          Regular?: string | null
          "State Full"?: string | null
          "Store Name"?: string | null
          "Street Address"?: string | null
          Title?: string | null
          Warehouse?: string | null
          Web?: string | null
          Zipcode?: string | null
        }
        Update: {
          Address?: string | null
          City?: string | null
          "Company Name"?: string | null
          Country?: string | null
          Diesel?: string | null
          Disclaimer?: string | null
          "Gas Price Types"?: string | null
          Hours?: string | null
          "Last Updated"?: string | null
          last_updated?: string | null
          Latitude?: number | null
          Longitude?: number | null
          numeric_id?: number | null
          Phone?: string | null
          post_author?: string | null
          Premium?: string | null
          Regular?: string | null
          "State Full"?: string | null
          "Store Name"?: string | null
          "Street Address"?: string | null
          Title?: string | null
          Warehouse?: string | null
          Web?: string | null
          Zipcode?: string | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      user_vehicles: {
        Row: {
          created_at: string | null
          fuel_type: string | null
          id: string
          name: string
          type: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          fuel_type?: string | null
          id?: string
          name: string
          type?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          fuel_type?: string | null
          id?: string
          name?: string
          type?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      comprehensive_price_data: {
        Row: {
          city: string | null
          country: string | null
          currency: string | null
          data_source_type: string | null
          diesel_price_original: string | null
          entry_source: string | null
          fuel_type: string | null
          premium_price_original: string | null
          price: number | null
          price_created_at: string | null
          price_update_id: string | null
          regular_price_original: string | null
          scraped_at: string | null
          scraped_from_url: string | null
          scraper_update_id: string | null
          source_type: string | null
          state: string | null
          station_name: string | null
          station_website: string | null
          status: string | null
          street_address: string | null
          update_time: string | null
        }
        Relationships: []
      }
      scraper_price_monitoring: {
        Row: {
          currency: string | null
          diesel_price: number | null
          premium_price: number | null
          price_update_count: number | null
          processing_status: string | null
          regular_price: number | null
          scraped_at: string | null
          scraper_update_id: string | null
          station_id: string | null
          store_name: string | null
          street_address: string | null
        }
        Relationships: [
          {
            foreignKeyName: "gas_price_scraper_updates_station_id_fkey"
            columns: ["station_id"]
            isOneToOne: false
            referencedRelation: "stations"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      backfill_existing_scraper_updates: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      backfill_scraper_station_links: {
        Args: Record<PropertyKey, never>
        Returns: {
          processed: number
          linked: number
        }[]
      }
      batch_publish_recent_price_updates: {
        Args: { days_back?: number }
        Returns: {
          processed_records: number
          price_updates_created: number
        }[]
      }
      enhance_station_matching: {
        Args: Record<PropertyKey, never>
        Returns: {
          matched_count: number
          unmatched_count: number
          details: string
        }[]
      }
      find_canadian_city: {
        Args: { search_city: string }
        Returns: {
          city: string
          province: string
        }[]
      }
      find_canadian_station: {
        Args: { search_address: string }
        Returns: {
          numeric_id: number
          "Store Name": string
          "Street Address": string
          City: string
          "State Full": string
          Zipcode: string
          Country: string
          Phone: string
          Hours: string
          Web: string
          Latitude: number
          Longitude: number
          Regular: string
          Premium: string
          Diesel: string
          "Last Updated": string
        }[]
      }
      find_nearby_stations: {
        Args:
          | {
              p_latitude: number
              p_longitude: number
              p_radius: number
              p_limit: number
              p_country: string
            }
          | {
              p_latitude: number
              p_longitude: number
              p_radius?: number
              p_limit?: number
              p_country?: string
            }
          | {
              ref_latitude: number
              ref_longitude: number
              max_distance_km: number
              max_results: number
              country_filter: string
            }
          | {
              target_lat: number
              target_lng: number
              max_distance?: number
              p_country?: string
            }
        Returns: {
          id: string
          store_name: string
          street_address: string
          city: string
          state: string
          zipcode: string
          country: string
          latitude: number
          longitude: number
          distance: number
          regular_price: number
          premium_price: number
          diesel_price: number
          last_updated: string
        }[]
      }
      get_canadian_cities_in_province: {
        Args: { province_name: string }
        Returns: {
          city_name: string
        }[]
      }
      get_canadian_stations_by_city: {
        Args: { city_name: string; province_name: string }
        Returns: {
          id: string
          store_name: string
          street_address: string
          city: string
          province: string
          latitude: number
          longitude: number
          regular_price: number
          last_updated: string
        }[]
      }
      get_latest_station_prices: {
        Args: { station_uuid: string }
        Returns: {
          fuel_type: string
          latest_price: number
          currency: string
          last_updated: string
          data_source: string
        }[]
      }
      get_next_scraping_range: {
        Args: { batch_size?: number }
        Returns: {
          start_id: number
          end_id: number
        }[]
      }
      get_popular_stations: {
        Args: { limit_count?: number; hours_window?: number }
        Returns: {
          id: string
          numeric_id: string
          store_name: string
          city: string
          state: string
          country: string
          street_address: string
          zipcode: string
          fuel_types: string[]
          price: number
          lastupdated: string
        }[]
      }
      get_price_overview_stats: {
        Args:
          | {
              p_country?: string
              p_state?: string
              p_city?: string
              p_interval?: unknown
            }
          | { p_interval?: unknown }
        Returns: {
          national_average: number
          highest_price: number
          highest_location_city: string
          highest_location_state: string
          lowest_price: number
          lowest_location_city: string
          lowest_location_state: string
        }[]
      }
      get_real_time_sync_dashboard: {
        Args: Record<PropertyKey, never>
        Returns: {
          category: string
          metric: string
          value: string
          status: string
          details: string
        }[]
      }
      get_state_counts: {
        Args: { country_filter: string }
        Returns: {
          state: string
          count: number
        }[]
      }
      gtrgm_compress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gtrgm_decompress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gtrgm_in: {
        Args: { "": unknown }
        Returns: unknown
      }
      gtrgm_options: {
        Args: { "": unknown }
        Returns: undefined
      }
      gtrgm_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      identify_duplicate_stations: {
        Args: Record<PropertyKey, never>
        Returns: {
          street_address: string
          country: string
          duplicate_count: number
          station_ids: string
          has_recent_data: boolean
          latest_update: string
        }[]
      }
      is_admin: {
        Args: Record<PropertyKey, never> | { user_id_to_check: string }
        Returns: boolean
      }
      is_current_user_super_admin: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      monitor_real_time_sync_status: {
        Args: Record<PropertyKey, never>
        Returns: {
          metric: string
          value: string
          details: string
        }[]
      }
      process_scraper_update_manually: {
        Args: { scraper_update_id: string }
        Returns: {
          processed_regular: boolean
          processed_premium: boolean
          processed_diesel: boolean
          total_processed: number
        }[]
      }
      promote_user_to_super_admin: {
        Args: { user_email: string }
        Returns: string
      }
      set_limit: {
        Args: { "": number }
        Returns: number
      }
      show_limit: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      show_trgm: {
        Args: { "": string }
        Returns: string[]
      }
      sync_all_station_prices_real_time: {
        Args: Record<PropertyKey, never>
        Returns: {
          canada_updated: number
          us_updated: number
          total_updated: number
          errors: number
        }[]
      }
      sync_canada_stations_prices: {
        Args: Record<PropertyKey, never>
        Returns: {
          updated_count: number
          error_count: number
        }[]
      }
      sync_recent_scraper_updates: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      sync_scraper_updates_to_price_updates: {
        Args: Record<PropertyKey, never>
        Returns: {
          synced_count: number
          error_count: number
        }[]
      }
      trigger_manual_real_time_sync: {
        Args: Record<PropertyKey, never>
        Returns: {
          message: string
          canada_updated: number
          us_updated: number
          total_updated: number
          errors: number
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
