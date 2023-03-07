const en = {
    general: {
        home: "Home",
        next: "Next",
        ok: "OK",
        done: "Done",
        cancel: "Cancel",
        confirm: "Confirm",
        apply: "Apply",
        save: "Save",
        select: "Select",
        connect: "Connect",
        disconnect: "Disconnect",
        disconnected: "Disconnected",
        yes: "Yes",
        no: "No",
        error: "Error",
        back: "Back",
        delete: "Delete",
        remove: "Remove",
        online: "Online",
        offline: "Offline",
        cloud: "Cloud",
        remote: "Remote",
        preset: "Preset",
        camera: "Camera",
        focuser: "Focuser",
        filter_wheel: "Filter Wheel",
        filter: "Filter",
        exposure: "Exposure",
        binning: "Binning",
        action: "Action",
        scope_type: "Scope Type",
        solver_type: "Solver Type",
        type: "Type",
        gain: "Gain",
        offset: "Offset",
        format: "Format",
        encode: "Encode",
        iso: "ISO",
        count: "Count",
        delay: "Delay",
        status: "Status",
        target: "Target",
        angle: "Angle",
        sep_profile: "SEP Profile",
        direction: "Direction",
        rotation: "Rotation",
        automatic: "Automatic",
        manual: "Manual",
        progress: "Progress",
        position_angle: "PA",
        details: "Details",
        skip: "Skip",
        updated: "Updated",
        new: "New",

        azimuth: "Azimuth",
        altitude: "Altitude",
        tags: "Tags",
        filename: "Filename",
        size: "Size",
        frame: "Frame",
        temperature: "Temperature",
        name: "Name",
        date: "Date",
        resolution: "Resolution",

        selectFile: "Select file",
        selectFolder: "Select folder",
        selectedDir: "Selected folder",
        new_folder: "Enter new folder name",
        create_new_folder: "Create new folder in",
        empty_folder: "Folder is Empty",

        train: "Train",
        no_data_found: "No data found",
        track: "Track",
        jobs: "Jobs",
        category: "Categories",
        profile: "Profile",
        arcmin: "arcmin",
        calculate: "Calculate",
        update: "Update",
        center: "Center",
        learnMore: "Learn more",

        // for dropdown
        select_option: "Select option...",
        search: "Search...",
        no_results: "No results",

        // for buttons/toggles
        on: "On",
        off: "Off",
        go: "GO",
        add: "Add",
        edit: "Edit",
        refresh: "Refresh",
        reset: "Reset",
        reset_all: "Reset All",
        start: "Start",
        stop: "Stop",
        stopping: "Stopping",
        clear: "Clear",
        solve: "Solve",
        parked: "Park(ed)",
        unparked: "UnPark(ed)",
        open: "Open",
        close: "Close",
        opened: "Open(ed)",
        closed: "Close(ed)",
        enable: "Enable",
        disable: "Disable",
        selectTime: "Select Time",
        set: "Set",

        // Confirm Delete Alert
        alert_confirm_delete_title: "Confirm Delete",
        alert_delete_profile_body: "Are you sure you want to delete the selected profile?",
        alert_delete_scope_body: "Are you sure you want to delete the selected scope?",

        // Confirm
        alert_confirmation_title: "Confirmation",
        alert_create_preset_body: "Are you sure you want to create preset with this name?",

        // error messages
        network_error: "Please make sure that your StellarMate is connected to your network",
        internet_required: "Please make sure that you are connected to the internet",
        alert_comm_error_title: "Communication Error",
        alert_comm_error_body: "Failed to communicate with StellarMate. Please make sure it is connected to your network.",
        ekoslive_down_title: "EkosLive is down",
        ekoslive_down_body: "EkosLive is not running, try rebooting StellarMate or contact StellarMate support.",
        kstars_down_title: "KStars is down",
        kstars_down_body: "KStars is not running, try rebooting StellarMate or contact StellarMate support.",
        wait_while_syncing: "Please wait while\n syncing",

        // External Storage
        reset_default: "Reset to default",
        external_storage: "External Storage"
    },
    darkLibrary: {
        title: "Dark Library",
        darks: "Darks",
        defects: "Defects",
        prefer: "Prefer",
        create_darks_title: "Create Darks",
        create_defects_title: "Create Defect Map",
        view_masters_title: "View Masters",

        create_darks: {
            exposure_range: "Exp. Range",
            to: "To",
            temp_range: "T. Range",
            binningOne: "1x1",
            binningTwo: "2x2",
            binningFour: "4x4",
            total_images: "Total",
        },

        create_defect_map: {
            master_dark: "Master Dark",
            bad_pixels: "Bad Pixels",
            hot_pixels: "Hot Pixels",
            cold_pixels: "Cold Pixels",
            generate_map: "Generate Map",
            save_map: "Saved",
            deviation: "σ"
        },

    },
    achievements:{
        score: "Total Score",
        badge: "Badge",
        achievements: "Achievements",
        unlocked: "Achievement Unlocked",
        points: "Points",
        completed: "Completed",
        notCompleted: "Not completed",
        capture_preview_title: "First Light!",
        ten_sequences_title: "So it begins!",
        mount_goto_title: "Magic Fingers",
        video_recording_title: "Director’s Cut",
        weather_check_title: "Cloud Magnet",
        live_stacking_title: "Let there be details",
        create_darks_title: "Embrace the dark side",
        create_defect_title: "Cosmic Makeup",
        import_mosaic_title: "Mosaic Weaver", 
        messier_captured_title: "MXXXX (e.g. M1)",
        all_messier_title: "Cosmic Marathon",
        scheduler_title: "Robotic Master", 
        capture_master_title: "Sky Master",
        capture_legend_title: "Sky Legend",
        paa_title: "Perfectionist",
        guide_rms_title: "Bullseye!",

        capture_preview_description: "Capture a Preview",
        ten_sequences_description: "Capture a sequence with 10 counts",
        mount_goto__description:  "Use Target GOTO by holding on the object for 3 seconds when the new image is captured",
        video_recording_description: "Record video for 1 minute",
        weather_check__description: "Use Cloud Map in weather info, Zoom in to at least 8x to check weather",
        live_stacking_description:  "Live stacking. Perform at least 5 images",
        create_darks_description:  "Create Darks of total 50 Images",
        create_defect_description: "Generate hot / cold pixels in Defect map above 80",
        import_mosaic_description: "Import Mosaics from telescopios",
        messier_captured_description: "A messier object is captured",
        all_messier_description: "All Messier objects were captured",
        scheduler_description: "Finish a scheduler job worth 2 or more hours of image data.",
        capture_master_description: "Capture a total of 500 images",
        capture_legend_description: "Capture a total of 1000 images",
        paa_description: "Finish PAA with box error lower than 30 arcsecs.",
        guide_rms_description: "Achieve total RMS guiding below 0.5 arcsecs.",

    },
    tourGuide:
    {
      tour_guide: "Tour Guide",
      previous: "Previous",
      finish: "Finish",
      title_devices_list: "StellarMate Devices List",
      title_device_actions: "Device Actions",
      title_profles: "Profiles",
      title_port_selector: "Port Selector",
      title_trains: "Optical trains",
      title_weather_bar: "Weather bar",
      title_cloud_report: "Cloud Report",
      
      title_next: "What's next?",
      title_focus: "Focus",
      title_align: "Align",
      title_guide: "Guide",
      title_capture: "Capture",
      title_mount: "Mount",
      title_observatory: "Observatory",
      title_scheduler: "Scheduler",
      title_indi: "INDI Control Panel",
      title_quick_controls: "Quick Controls",
      title_preview: "Preview",
      title_framing: "Framing",
      title_live_video: "Live Video",
      title_stop: "Stop",
      title_live_stacking: "Live Stacking",
      title_quick_settings: "Qucik Camera Settings",
      
      title_targets_info: "About Targets",
      title_search_bar: "Search bar",
      title_time_controls: "Time Controls",
      title_target_controls: "Targets Controls",
      title_object_info: "Object info",
      title_fov: "Target Field Of View",
      title_target_action: "Target Action",

      description_devices_list: "This is the list of automatically discovered and manually added StellarMate units. Tap RESCAN to detect new StellarMate units on the network.",
      description_device_actions: "Remove a device from the list, perform a factory reset, or log out.",
      description_profles: "Manage your astronomy equipment in Equipment Profiles. All equipment must be powered and connected to StellarMate before starting a profile. Once a profile is started, configure the Optical Trains and then tap Ekos to start your astrophotography session.",
      description_port_selector: "After a profile is started for the first time, select the serial and/or network settings for your devices.",
      description_trains:
      "Set up how your equipment is arranged using Optical trains. Assign each device to a specific function. Create a train for each camera.",
      description_weather_bar:"Brief weather report and current site Bortle class",
      description_cloud_report: "3-hours Cloud overlay." ,
      description_next: "Explore applicable astronomical targets by tapping the Targets tab. Use Go & Solve to center your target in the camera frame. Open the Framing Assistant to achieve the perfect desired orientation. Head over to Ekos tab to set up imaging sequences and live stack images.", 

      description_focus: "Focus the camera by using a motorized focuser.",
      description_align: "Center the mount exactly on target by plate-solving an image.",
      description_guide: "Keep the mount locked to your target during tracking to enable long exposures.",
      description_capture: "Create sequences to capture images using configurable settings. Manage filter wheel settings and Dark Library.",
      description_mount: "Toggle tracking, parking, and meridian flip settings. Configure auto-park.",
      description_observatory: "Control dome and dust-cap equipment.",
      description_scheduler: "Automate complete astrophotography session by selecting target and sequence file. Import mosaics from Telescopius.",
      description_indi: "Direct low-level access to equipment properties.",
      description_quick_controls: "Quick access to mount, camera, and rotator controls.",
      description_preview: "Capture a single preview frame.",
      description_framing: "Loop exposures indefinitely until stopped",
      description_live_video: "Start live video streams and record videos to storage.",
      description_stop: "Stop any ongoing exposures or recordings.",
      description_live_stacking: "Live stack images to increase signal to noise ratio. If an existing capture sequence is running, live stacking will use incoming images otherwise it will loop exposures using settings in Quick Camera Settings.",
      description_quick_settings: "Select active train and configure camera and filter wheel settings.",
      
      description_targets_info: "Targets is the StellarMate Planning tool to streamline your observation session. Search from thousands of objects and filter them using simple criteria. Use the Framing Assistant to frame your targets." ,
      description_search_bar:
        "Filter objects in the existing list or search for new objects by entering the name and tapping the search button.",
      description_time_controls:
        "If Ekos is offline, adjust the target date and time calculations.",
      description_target_controls:
        "Check out twilight information, manage FOVs, adjust filters, and select object types.",
      description_object_info: "Object magnitude, rise, transit, and set times.",
      description_fov: "Tap to enter Framing Assistant mode.",
      description_target_action: "Add target to favorites or custom list. Command a GOTO only or a GOTO followed by capture and solve. If Ekos is offline, schedule the target.",
    },
    tooltip: 
    {
        placeholder: "Placeholder %{0} or %{1}",
        placeholder_file: "The name of the .esq file, without extension.",
        placeholder_date: "The current time and date when the file is saved.",
        placeholder_type: "The frame type e.g: 'Light', 'Dark'",
        placeholder_exp: "The exposure duration in seconds.",
        placeholder_filter: "The active filter name.",
        placeholder_seq: "The image sequence identifier where * is the number of digits used (1-9), This tag is mandatory and must be the last element in the format",
        placeholder_target: "The Target name.",
        format_title: "Format is used to define the image file names by the use of placeholder tags.",
        suffix: "Number of digits used to append the sequence number to the filename",
        paa_desc: "Use plate-solving method for Polar Alignment. Plate solving is slower but provides more accurate results.",
        plate_solving: "Uses plate solving to track what the corrected alignment error is during the Refresh process. User should try to reduce the error in the Updated Err line below and minimize the size of the arrows.",
        movestar_title:"Move Star and Calc Error",
        movestar_desc: "Like Move Star, But Ekos attemps to track the star being moved and estimates the current alignment error when it can."
    },
    splash: {
        checking_for_updates: "Checking for updates...",
        downloading_package: "Downloading update...",
        installing_update: "Installing update...",
        channel_update: "Channel switching in progress...",
        upto_date: "Already up to date.",
        update_installed: "All updates installed.",
        loading: "Loading..."
    },
    validations: {
        username_required: "Username is mandatory",
        username_tooshort: "Minimum 3 characters required",
        username_toolong: "Can't have more than 64 characters",
        username_invalid: "Invalid characters in username",
        password_required: "Password required",
        password_invalid: "Minimum 6 characters required",
        confirm_password_required: "Confirm password required",
        confirm_password_mismatch: "Confirm password incorrect",
        email_required: "E-Mail required",
        email_invalid: "Invalid e-mail address",
        license_required: "License key required",
        serial_required: "Serial key required",
        new_scope_vendor: "Enter a valid vendor name",
        new_scope_model_invalid: "Enter a valid model",
        new_scope_aperture_invalid: "Enter a valid aperture",
        new_scope_focal_length_invalid: "Enter a valid focal length",
        new_scope_focal_ratio_invalid: "Enter a valid focal ratio",
        enter_file_name: "Enter a filename"
    },
    progress: {
        please_wait: "Please wait ...",
        establishing_connection: "Establishing Connection",
        cameras: "Getting Cameras",
        mounts: "Getting Mounts",
        scopes: "Getting Scopes",
        filter_wheels: "Getting Filter Wheels",

        //Device Connection
        registering: "Registering...",
        registered: "Registered",
        authenticating: "Authenticating...",
        authenticated: "Authenticated",
        checking_kstars: "Checking KStars...",
        kstars_open: "KStars Open",
        checking_ekoslive: "Checking EkosLive...",
        ekoslive_connected: "EkosLive Connected",
        starting_ekos: "Starting Ekos...",
        getting_devices: "Getting Devices...",
        loading_settings: "Loading Settings...",
        register_device: "Scanned QR Code, Registering Device: ",
    },
    welcome: {
        register_new_device: "Register new device?",
        have_existing_account: "Have an existing account?",
        require_sm_plus_pro: "Register if you have"
    },
    device_scanner: {
        scanning: "Please wait while we look for StellarMate device(s) on the network",
        qr_scan: "Scan your Device QR Code",
    },
    statuses: {
        Idle: "Idle",
        prep: "Prep",
        run: "Run",
        Aborted: "aborted",
        "Calibration error": "Calibration error",
        Capturing: "Capturing",
        Streaming: "Streaming",
        "In Progress": "In Progress",
        "Setting Temperature": "Setting Temperature",
        Slewing: "Slewing",
        Calibrating: "Calibrating",
        Tracking: "Tracking",
        Guiding: "Guiding",
        Parking: "Parking",
        Loading: "Loading",
        "User Input": "User Input",
        Complete: "Complete",
        Suspended: "Suspended",
        Parked: "Parked"
    },
    connect: {
        register_welcome: "Please sign in to your stellarmate.com account to synchronize devices.",
        welcome_heading: "Welcome",
        welcome_description: "Please make sure that you are either connected to StellarMate's HotSpot or StellarMate is on the same network as you are.",
        welcome_rescan: "Click RESCAN to begin scanning the network for StellarMate devices.",
        device_unreachable: "Device is not reachable! Check power and network settings.",
        login_mismatch: "Authentication failed. App password is different from online stellarmate.com password. Register App again with correct online password.",
        old_stellarmate_heading: "Update Required!",
        old_stellarmate_description:
            "You appear to be using an older version of StellarMate OS. You must upgrade to the most recent version of StellarMate to continue using this App.",
        primary: "Primary",
        guide: "Guide",
        scope: "Scope",
        btn_rescan: "RESCAN",
        btn_port_select: "Port Selector",
        btn_sync_gps: "Sync GPS",
        btn_dslr_setup: "DSLR Setup",
        btn_clear_driver_config: "Clear Driver Config.",
        scan_in_progress: "Scanning In Progress ...",
        connection_in_progress: "Connecting StellarMate...",
        registration_in_progress: "Registering StellarMate...",
        logging_in_progress: "Logging to StellarMate...",
        connecting: "Connecting...",
        logging: "Logging...",
        generic: "Generic Serial",
        select_driver: "Please select device type and driver",

        cloudsMap: {
            btn_clouds_map: "Clouds Map",
            attribution: "© OpenStreetMap",
            map_title: "3-Hour Cloud Map"
        },

        ip_address: "IP Address",
        login_register: {
            heading: "Authenticate",
            heading_online: "Sign in to stellarmate.com",
            connect_to_internet: "You must be connected to the Internet.",
            connect_to_sync: "This is only done once to synchronize your account.",
            reset_app: "Tip: You can resynchronize the app with your online account by going to the About tab and clicking" +
                " Reset App button then re-launching the app",
            no_valid_device: "No valid device information available.",

            setup_guide: "Setup Guide",
            register: "Register",
            login: "Sign in",
            serial: "Serial #",
            license: "License Key",
            username: "Username",
            password: "Password",
            confirm_password: "Confirm Password",
            first_name: "First name",
            last_name: "Last name",
            email: "Email"
        },
        device_manager: {
            alert_confirm_remove_title: "Confirm Removal",
            alert_confirm_remove_body: "Are you sure that you want to remove this device?",
            btn_sign_out: "Sign Out"
        },
        profile_manager: {
            heading: "Equipment Profiles"
        },

        port_selector: {
            connect_all: "Connect All"
        },

        manually_add_device: {
            heading: "Manually Add Device",
            btn_add_device: "Add Device",

            alert_unreachable_title: "An error occurred",
            alert_unreachable_body: "There was an error while trying to locate the device at the specified IP address. Please re-check the IP address and try again."
        },
        device_scanner: {
            no_device_before_scan: "No Devices Detected. Run Scanner.",
            no_device_after_scan: "Scan complete. No devices found.",
            auto_scanned: "Auto Scanned",
            manually_added: "Manually Added",
            add_a_device: "Add a device",
            devices_detected: "Detected",
            no_network_found: "No network detected. Make sure you are connect to a network."
        },
        add_profile: {
            add_profile: "Add Profile",
            edit_profile: "Edit Profile",
            mount: "Mount",
            ccd: "Camera 1",
            dome: "Dome",
            guider: "Camera 2",
            ao: "Adaptive Optics",
            weather: "Weather",
            aux1: "Aux1",
            aux2: "Aux2",
            aux3: "Aux3",
            aux4: "Aux4",
            focuser: "Focuser",
            filter: "Filter"
        },
        add_scope: {
            add_scope: "Add Scope",
            edit_scope: "Edit Scope",
            vendor: "Vendor",
            aperture: "Aperture",
            focal_length: "Focal Length"
        },
        auto_detect: {
            alert_auto_detect_title: 'Auto Detect Instructions',
            alert_auto_detect_body: 'Unplug ALL equipment from StellarMate then press Ok. Then plug them one by one to detect' +
                ' the device type and driver. After each device is plugged, you need to confirm the driver.',
            alert_mapped_title: 'Device Mapping',
            alert_mapped_body: 'Device serial port is successfully mapped.',
            alert_missing_driver_title: 'Driver missing',
            alert_missing_driver_body: 'You must select a driver first.'
        },
        dslr_setup: {
            width: "Width",
            height: "Height",
            pixel_width: "Pixel Width",
            pixel_height: "Pixel Height"
        }
    },
    targets: {
        now: "Now",
        night: "Night",
        rise: "Rise",
        moon: "Moon",
        sun: "Sun",
        search: "Search",
        cam_width: "Camera Width",
        cam_height: "Camera Height",
        phases:
            {
                new_moon: "New Moon",
                full_moon: "Full Moon",
                first_quarter: "First quarter",
                third_quarter: "Third quarter",
                waxing_crescent: "Waxing crescent",
                waxing_gibbous: "Waxing gibbous",
                waning_crescent: "Waning crescent",
                waning_gibbous: "Waning gibbous",
            },
        lists: "Lists",
        framing_assistant: "Framing Assistant",
        target_rotation: "Target Position Angle",
        current_rotation: "Current Rotation",
        rotate_capture: "Rotate & Capture",
        goto_rotate: "GOTO & Rotate",
        angular_offset: "Angular Offset",
        no_objects_in_list: "No Objects found, please adjust or reset the filters.",
        go_and_solve: "Go & Solve",
        fov_profile: "FOV Profile",
        fov_width: "FOV Width",
        fov_height: "FOV Height",
    },
    ekos: {
        heading: "Ekos",
        tgl_mount: "MOUNT",
        tgl_solution_bar: "SOLUTION BAR",
        tgl_sequence: "SEQUENCE",
        tgl_properties: "PROPERTIES",

        alert_ekos_offline_title: "Ekos is offline",
        alert_ekos_offline_body: "Ekos seems to be offline at the moment. Did you start equipment profile?",

        alert_ekos_disconnected_title: "Devices disconnected",
        alert_ekos_disconnected_body: "Not all equipment profile devices are connected, please connect all devices then try again.",

        ekos_dialog: {
            auto_closes_in: "Auto closes in"
        },

        controls_bar: {
            mount_speed: "Mount Speed",
            centering: "Centering",
            find: "Find",
            max: "Max"
        },

        collapse_align: {
            heading: "Align",
            action_sync: "Sync",
            action_slew: "Slew to Target",
            action_nothing: "Nothing",
            solver_backend: "Backend",
            control: "Control",
            solve: "Capture & Solve",
            load: "Load & Slew",
            polar: "Polar Align",
            accuracy: "Accuracy",
            settle: "Settle",
            dark: "Dark",
            arcsec: "arcsec",
            ms: "ms",
            xAxis: "Iterations",
            yAxis: "Error (arcsec)",
            refresh_rate: "Refresh Rate",
            manualRotator: {
                heading: "Manual Rotator",
                currentPA: "Current PA",
                targetPA: "Target PA",
                another_image: "Take another Image",
            },
            alignSettings: {
                rotator_control: "Rotator Control",
                use_scale: "Use Scale",
                use_position: "Use Position"
            },
            calibrationSettings: {
                pulse: "Pulse",
                maxMove: "Max Move",
                twoAxis: "Two axis",
                squareSize: "Auto square size",
                calibrateBacklast: "Remove DEC backlash in guide calibration",
                resetCalibration: "Reset Guide Calibration After Each Mount Slew",
                reuseCalibration: "Store and reuse guide calibration when possible",
                reverseCalibration: "Reverse DEC on pier-side change when reusing calibration"
            }
        },
        collapse_camera: {
            heading: "Capture",
            type_light: "Light",
            type_bias: "Bias",
            type_flat: "Flat",
            type_dark: "Dark",
            format_fits: "FITS",
            format_native: "Native",
            cooling_unavailable: "N/A",
            btn_add_to_sequence: "Add to Sequence",
            btn_loop: "Loop"
        },
        capture_presets: {
            heading: "Preset Settings"
        },
        capture_limits: {
            heading: "Limit Settings",
            guiding_deviation: "Guiding Deviation <",
            guiding_deviation_unit: "\"",
            focusHFR: "Autofocus if HFR >",
            focusHFR_unit: "pixels",
            focusDeltaT: "Autofocus if ΔT° >",
            focusDeltaT_unit: "°C",
            refocusN: "Refocus every",
            refocusN_unit: "minutes"
        },
        capture_filters: {
            heading: "Filter Settings",
            auto_focus: "Auto Focus",
            lock_filter: "Lock Filter"
        },
        targets_filters: {
            object_type: "Object Type",
            alt: "Alt"
        },
        capture_auto_calibration: {
            heading: "Auto Calibration",
            flat_source: "Flat Source",
            flat_duration: "Flat Duration",
            dust_builtin: "Dust Cover with Built-in Flat Light",
            dust_external: "Dust Cover with External Flat Light",
            wall: "Wall",
            az: "Az",
            adu: "ADU",
            tolerance: "Tolerance",
            parkMount: "Park Mount",
            parkDome: "Park Dome"
        },
        capture_file: {
            filename: "File Name",
            heading: "File Settings",
            prefix: "Prefix",
            script: "Script",
            directory: "Directory",
            ts: "TS",
            duration: "Duration",
            suffix: "Suffix",
            usb: "USB Unmounted successfully",
            unmount: "Unmount"
        },

        collapse_dome: {
            heading: "Cap & Dome",
            cap: "Cap",
            dome: "Dome",
            shutter: "Shutter",
            domeSlaving: "Dome Slaving",
            params: "Parameters",
            measurements: "Measurements",
            autosync_threshold: "Autosync Threshold (deg)",
            radius: "Radius (m)",
            shutter_width: "Shutter Width (m)",
            n_displacement: "N Displacement (m)",
            e_displacement: "E Displacement (m)",
            up_displacement: "Up Displacement (m)",
            ota_offset: "OTA Offset (m)"
        },
        collapse_focus: {
            heading: "Focus",
            hfr: "HFR",
            hfr_plot: "HFR Plot",
            focus_in: "In",
            focus_out: "Out",
            steps: "Steps",
            settings: {
                suspendGuiding: "Suspend Guiding",
                autoSelectStar: "Auto Select Star",
                subframe: "Sub Frame",
                fullfield: "Full Field",
                dark: "Dark Frame",
                annulus: "Annulus",
            },
            process: {
                title: "Process",
                detection: "Detection",
                algorithm: "Algorithm",
                threshold: "Threshold",
                effect: "Effect",
                averageOver: "Average Over",
                kernelSize: "Kernel Size",
                numOfRows: "Num. of Rows",
                sigma: "Sigma"
            },
            mechanics: {
                title: "Mechanics",
                initialStepSize: "Initial Step Size",
                maxTravel: "Max Travel",
                maxStepSize: "Max Step Size",
                backlash: "Backlash",
                outStepMultiple: "Out Step Multiple",
            },
        },
        collapse_guide: {
            total_rms_plot: "RMS",
            scope_primary: "Primary",
            guidingRate: "Guiding Rate",
            guider: "Guider",
            via: "Via",
            box: "Box",
            effects: "Effects",
            dither: "Dither",
            frequency: "Frequency",
            every: "every",
            frames: "frames",
            gpg: "GPG",
            directions: "Directions",
            dec: "DEC",
            swap: "Swap",
            east: "+",
            west: "-",
            north: "+",
            south: "-",
            subframe: "Subframe",
            autostar: "Auto Star",
            aggressiveness: "Aggressiveness",
            rarms: "RA RMS\"",
            derms: "DE RMS\"",
            totalrms: "Total RMS\"",
            advanced: "Advanced",
            clear_model: "Clear Calibration Model",
            yAxis: "Drift (arcsec)"
        },
        collapse_observatory: {
            heading: "Observatory"
        },
        collapse_polar: {
            heading: "Polar Alignment",
            mount_direction: "Mount Direction",
            manual_slew: "Manual Slew",
            west: "West",
            east: "East",
            mount_rotation: "Mount Rotation",
            refresh: "Refresh",
            fov_error: "Disabled: FOV must be 30 arcmins or wider.",
            polar_error: "Polar Error: ",
            // error: "Error: ",
            az_error: "AZ error: ",
            al_error: "AL error: "
        },
        collapse_sequence: {
            progress: "Start & Stop Sequences",
            sequence: "Sequence",
            overall_progress: "Overall Progress",
            sequences: "Sequences",
            no_sequences: "No sequences. You can add them by tapping on Add to Sequence."
        },
        collapse_mount: {
            meridian_flip: "Meridian Flip",
            flip_if_ha: "Flip if HA >",
            flip_if_ha_unit: "°",
            pierside: "Pier Side",
            auto_park: "Auto Park",
            auto_park_everyday: "Every day",
            park_at: "Park at",
            reset_options: "Reset Options",
            min_alt: "Min. Alt",
            max_alt: "Max. Alt",
            enable_alt_limits: "Enable Alt Limits",
            enable_ha_limits: "Enable HA Limits",
            max_ha: "Max. HA (hours)",
            clear_model: "Clear Model",
            east: "E",
            west: "W",
            east_long: "East (pointing west)",
            west_long: "West (pointing east)"
        },
        modal_add_to_seq: {
            heading: "Add To Sequence",
        },
        modal_goto_sync: {
            heading: "Goto or Sync",
            category: "Category",
            btn_goto: "Goto"
        },
        mount_status_bar: {
            ra: "RA",
            de: "DE",
            az: "AZ",
            at: "AL",
            ha: "HA"
        },
        camera_status_bar: {
            bin: "Bin",
        },
        solution_bar: {
            dra: "dRA",
            dde: "dDE",
            arcsec: '"',
            pix: "PIX",
            rot: "ROT",
            fov: "FOV"
        },
        mount_overlay: {
            right_asc: "Right Asc.",
            declination: "Declination",
        },
        histogram: {
            mean: "Mean",
            median: "Median",
            bit_depth: "Bit Depth",
            non_linear_histogram: "Non-Linear Histogram"
        },
        livestacking: {
            auto_dark: "Auto Dark",
            plate_solve: "Plate Solve",
            background: "Background",
            saturation: "Saturation",
            contrast: "Contrast",
            sigma_clipping: "Sigma Clipping",
            noImages: "No Live Stacking Images found"
        },
        scheduler: {
            scheduler: "Scheduler",
            j2000: "J2000",
            fits: "FITS File",
            priority: "Priority",
            generalSettings: "General Settings",
            startupConditions: "Job Startup",
            JobConstraints: "Job Constraints",
            completionConditions: "Job Completion",
            observatoryStartup: "Observatory Startup",
            abortedJobManagement: "Aborted Job",
            observatoryShutdown: "Observatory Shutdown",
            alt: "Alt >",
            moon: "Moon >",
            twilight: "Twilight",
            artifHorizon: "Artificial Horizon",
            sequenceCompletion: "Sequence Completion",
            repeatFor: "Repeat for",
            repeatUntilTerminated: "Repeat Until Terminated",
            repeatUntil: "Repeat until",
            unparkDome: "UnPark Dome",
            unparkMount: "UnPark Mount",
            uncap: "UnCap",
            warmCCD: "Warm CCD",
            none: "None",
            queue: "Queue",
            immediate: "Immediate",
            rescheduleErrors: "Reschedule Errors (seconds wait)",
            no_jobs: "No Jobs in the queue",
            err_loading_folders: "Error loading folders",
            err_loading_fits: "Error loading .fits files",
            err_delete_file: "Error deleting file",
            add_job: "Add Job",
            start_jobs: "Start & Stop Jobs",
            culimination: "Culmination Offset",
            create_jobs: "Create Jobs",

            mosaic: {
                import: "Import Mosaic",
                planner: "Mosaic planner"
            }
        },
        summary: {
            empty: "No summary data available",
            deviation: "Deviation",
            inactive: "Inactive"
        }
    },
    optical_train: {
        optical_trains: "Optical Trains",
        telescope: "Telescope / Lens",
        create_new: "Create New",
        dslr_lens: "DSLR Lens",
        focal_ratio: "Focal Ratio",
        tooltip:{
            title: "Select the device that receives the guiding correction pulses",
            subject: "This can be one of the following devices:",
            mount_device: "If the Mount can receive guiding correction pulses, then it is best to select it so that the pulses are directly sent to the mount. This is the recommended option.",
            st4_device: "If using an ST4 cable between the guide camera and mount, then you should select the Guide Camera as the Guider.",
            dedicated_device: "If using a dedicated guider interface device (like Shoestring GPUSB) then select it as the Guider",
            dedicated: "Dedicated",
            filterWheel: "Select a filter wheel. This must be a standalone filter wheel connected to StellarMate via USB. If you have a filter wheel that is embedded in a camera, leave this field empty."
        }

    },
    status: {
        system: "System",
        info: "Info",
        software: "Software",

        cpu: "CPU",
        ram: "RAM",
        storage: "STORAGE",
        temperature: "TEMPERATURE",

        stable: "Stable",
        beta: "Beta",

        wifi_network: "Wifi Network IP",
        ethernet_network: "Ethernet IP",
        model: "Model",
        version: "Version",
        hostname: "Hostname",
        time: "Time",
        release_type: "Release Type",
        updates: "Updates",

        hotspotMode: "Hotspot Mode",
        wifiNetwork: "Wifi Network",

        wifiBand: "WiFi Band",

        update_available: "New Updates Available",

        btn_vnc: "Desktop (VNC)",
        btn_web_manager: "Web Manager",
        btn_restart: "Restart",
        btn_shutdown: "Shutdown",
        btn_manage_wifi: "Manage WiFi",
        btn_enable_direct_ethernet: "Enable Direct Ethernet",
        btn_disable_direct_ethernet: "Disable Direct Ethernet",
        btn_enable_hotspot: "Enable Hotspot",
        btn_disable_hotspot: "Disable Hotspot",
        btn_change_hostname: "Change Hostname",
        btn_check_for_updates: "Check For Updates",
        btn_update_now: "Update Now",
        btn_update_in_progress: "Updating...",
        btn_factory_reset: "Factory Reset",
        btn_change_resolution: "Change Resolution",
        btn_later: "Later",
        btn_resize_fs: "Resize SD",
        btn_continue: "Continue",
        information_ekos_offline: 'Ekos is offline. Please start the equipment profile directly or via the Scheduler.',
        no_camera_detected: 'No cameras detected or camera offline.',

        alert_device_offline_title: "Device is offline",
        alert_device_offline_body: "Device seems to be offline at the moment. Did you login to a device?",

        alert_restart_title: "Restarting StellarMate",
        alert_restart_body: "Your device will now be restarted. You can try to reconnect once it is booted again.",
        alert_shutdown_title: "Shutting Down StellarMate",
        alert_shutdown_body:
            "Your device will turned-off now. To be able to re-use it you will need to manually turn it on.",

        alert_resize_title: "Resize microSD Card",
        alert_resize_body:
            "StellarMate will expand to the full SD card size. Restart StellarMate after resizing.",
        alert_resize_btn_resize: "Resize",

        alert_hotspot_enable_title: "Enabling Hotspot",
        alert_hotspot_enable_body:
            "If you enable hotspot, stellarmate will disconnect from any currently joined wifi network and start its own hotspot. To continue using StellarMate, you shall connect to the same hotspot network from your device. Do you want to continue?",

        alert_hotspot_post_enable_title: "Please connect to hotspot",
        alert_hotspot_post_enable_body: 'You may now connect to "stellarmate" hotspot and press OK when done to continue',

        alert_hotspot_disable_body:
            "Disabling hotspot will make StellarMate connect to its previously remembered Wireless network. You should be on the same network to continue using StellarMate when it's hotspot is disabled. Do you want to continnue?",

        alert_factory_reset_body: "Factory reset complete. Please restart StellarMate now.",
        alert_factory_reset_confirmation_body: "Are you sure you want to reset device to factory settings? All settings will be wiped. This action is irreversible!",

        alert_forget_wifi_title: "Forget Wifi",
        alert_forget_wifi_body:
            "All WiFi networks will be cleared and StellarMate will now run in HotSpot Mode. You need to switch to the hotspot network in your phone/tablet. Do you want to continue?",

        alert_join_wifi_title: "Join Wifi Network",
        alert_join_wifi_body:
            "Joining a wifi network will close the hotspot (if started) by StellarMate. To continue using StellarMate, make sure you are on the same network. Do you want to continue?",

        alert_change_band_title: "Are you sure you want to change the band?",
        alert_change_band_body:
            "StellarMate App could be disconnected and channel switching might fail due a variety of reasons in which case the hotspot will be restored to default settings.",

        alert_change_resolution_title: "Success!",
        alert_change_resolution_body: "You may now restart StellarMate for the resolution to take effect",

        alert_change_release_title: "Beta Channel",
        alert_change_release_body: "Are you sure you want to switch to the unstable and unsupported beta channel?",

        alert_direct_ethernet_title: "Direct Ethernet",
        alert_direct_ethernet_connect_body: "Connect Ethernet cable directly between StellarMate and your PC. Set your PC IP address to 192.168.100.2 and gateway to 192.168.100.1",
        alert_direct_ethernet_disconnect_body: "Remove direct Ethernet cable.",

        alert_clear_all_driver_config_title: "Clear All Driver Configuration",
        alert_clear_all_driver_config_body: "Are you sure you want to delete all driver configuration?",

        alert_update_complete_title: "SM OS Update",
        alert_update_complete_body: "Update complete, please restart StellarMate.",

        alert_network_error_title: "Network error",
        alert_network_error_body: "Failed to query network information",
        alert_delete_directory_message: "You want to delete {0} directory and all files under it?",

        alert_permission_title: "Location permission",
        alert_permission_description: "StellarMate App requires Location information to synchronize StellarMate gadget location to the App location. Do you want to proceed?",
        
        alert_remote_isactive: "Failed to check if Remote support is active, Is your Stellarmate OS up to date? ",
        alert_remote_start: "Could not start the Remote support: ",
        alert_remote_stop: "Could not stop the Remote support: ",
        alert_remote_id: "Could not find Remote support ID", 
        alert_remote_failed: "Failed to get Remote support ID: ",
        alert_remote_not_found: "No Remote support found: ",


        change_resolution_modal: {
            mode: "Mode"
        },

        change_hostname_modal: {
            new_hostname: "New Hostname"
        },

        change_wifi_modal: {
            heading: "Join A Network",
            ssid: "SSID",
            err_wifi: "There was a problem while looking for Wifi networks."
        },

        change_band_modal: {
            heading: "Change Band",
            band: "Band",
            channel: "Channel"
        },

        vnc_view: {
            heading: "VNC",
            alert_unreachable_title: "VNC unreachable",
            alert_unreachable_body: "There seems to be a problem while trying establish connection to VNC viewer"
        },

        web_manager_view: {
            alert_unreachable_title: "Web Manager unreachable",
            alert_unreachable_body: "There seems to be a problem while trying establish connection to Web Manager"
        }
    },
    settings: {
        heading: "Settings",
        language: "Language",
        high_bandwidth: "High Bandwidth",
        transfer_images: "Transfer Images",
        notifications: "Notifications",
        sounds: "Sounds",
        cloud_storage: "Cloud Storage",
        auto_sync: "Auto Sync",
        location: "Location",
        unit_system: "Unit System",
        reset_app: "Reset App",
        reset_app_body: "Purge all App settings?",
        metric: "Metric",
        imperial: "Imperial",
    },
    cloud: {
        heading: "View",
        btn_filters: "Filters",
        btn_gallery: "Gallery",
        btn_offline_viewer: "Offline Viewer",
        btn_cloud_viewer: "Cloud Viewer",
        no_images_title: "No images found",
        no_images_body: "Try changing the filters.",
        no_selected_title: "No image selected",
        no_selected_body: "Select an image from Galley",
        cloud_disabled_title: "Cloud is disabled",
        cloud_disabled_body: "Go to settings and enable Cloud to be able to access this tab.",
        pro_plan_body: "Cloud storage is only available for Pro plan users.",
        alert_cannot_download_title: "Cannot download",
        alert_cannot_download_body: "There was an error while trying to download.",
        alert_confirm_delete_title: "Are you sure?",
        alert_confirm_delete_body: "Do you really wish to delete {0}? Once deleted, it cannot be recovered again.",

        filters_drawer: {
            field: "Field",
            condition: "Condition",
            value: "Value",
            btn_add_filter: "ADD FILTER",
            airmass: "Airmass",
            object: "Object",
            contains: "Contains"
        },
        gallery_drawer: {
            all: "All",
            h1: "1h",
            h24: "24h",
            d7: "7d",
            m1: "1m",
            y1: "1y",
            images: "Images",
            btn_sort: "SORT",
            btn_delete_all: "DELETE ALL",
            ascending: "A-Z",
            descending: "Z-A",

            alert_no_images_title: "No images",
            alert_no_images_body: "There are no images in the gallery that could be deleted.",
            alert_delete_all_body: "Are you sure that you want to delete {0} image(s)? This is an irreversible operation."
        },
        info_drawer: {
            add_tags_here: "Add tags here",
            captured_on: "Captured on"
        }
    },
    about: {
        heading: "About",
        bundle: "Bundle",
        copyright_line1: "StellarMate is developed by Ikarus Technologies © 2017-2022",
        copyright_line2: "Background image by Alamri Observatory"
    },
    messages: {
        // polar align
        polar_idle: "This tool provides a simple method to polar align a German equatorial mount. Park your mount to home position where it points toward the celestial pole with the counter weight down. Select mount direction and speed and then click Start to begin the process. If you do not have a view of the pole, use the SkyMap or Ekos mount control to point anywhere, preferably near the meridian, choose East or West according your side, lower the rotation angle if necessary, and click Start.",
        alert_directions_not_found: "Coordinates not found, Please frame your target or enter coordinates manually.",
        manual_rotator: "Rotate camera by the indicated angle and then take an image to update the position angle",
        welcome: "Welcome to StellarMate"
    },
    ekosLivePro: {
        pushNotification: "Push Notification",
        level: "Notification Level",
        settings: "EkosLive Pro Settings"
    }
};

export default en;
