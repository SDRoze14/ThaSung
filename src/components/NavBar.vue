<template>
  <v-navigation-drawer app dark color="#0066cc" width="320">
    <v-list dense nav class="py-0 ma-3">
      <v-list-item two-line :class="miniVariant && 'px-5'">
        <!-- <v-list-item-avatar> -->
        <font-awesome-icon size="2x" color="white" icon="user-md" />
        <!-- </v-list-item-avatar> -->

        <v-list-item-content class="px-3">
          <h2>{{decode.first_name+' '+decode.last_name}}</h2>
          <v-list-item-subtitle>ผู้ช่วยแพทย์</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider class="py-2"></v-divider>

      <v-list-item link @click="Dashbord()">
        <v-icon>dashboard</v-icon>
        <v-list-item-content class="px-3">
          <h4>Dashboard</h4>
        </v-list-item-content>
      </v-list-item>

      <!-- +++++++++++++ ยา +++++++++++++++ -->
      <v-list-group v-model="ture" color="white">
        <template v-slot:activator>
          <font-awesome-icon size="lg" icon="pills" />
          <v-list-item-content class="px-3">
            <h4>ยา</h4>
          </v-list-item-content>
        </template>

        <v-list-item link @click="Medical()">
          <v-list-item-content class="px-8">
            <h5>ข้อมูลยา</h5>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link @click="OrderMedical()">
          <v-list-item-content class="px-8">
            <h5>ข้อมูลการสั่งซื้อยา</h5>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
      <!-- +++++++++++++++++++++++++++++++ -->

      <!-- +++++++++++++ อุปกรณ์ +++++++++++++++ -->
      <v-list-group v-model="ture" color="white">
        <template v-slot:activator>
          <font-awesome-icon size="lg" icon="syringe" />
          <v-list-item-content class="px-3">
            <h4>อุปกรณ์</h4>
          </v-list-item-content>
        </template>

        <v-list-item link>
          <v-list-item-content class="px-8" @click="Equipment()">
            <h5>ข้อมูลอุปกรณ์</h5>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content class="px-8" @click="OrderEquipment()">
            <h5>ข้อมูลการสั่งซื้ออุปกรณ์</h5>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
      <!-- +++++++++++++++++++++++++++++++++++ -->

      <v-list-item link @click="PatientInfo()">
        <font-awesome-icon size="lg" icon="clipboard-list" />
        <v-list-item-content class="px-3">
          <h4>ข้อมูลคนไข้</h4>
        </v-list-item-content>
      </v-list-item>

      <v-list-item link @click="Schedule()">
        <font-awesome-icon size="lg" icon="table" />
        <v-list-item-content class="px-3">
          <h4>ตารางการนัดหมาย</h4>
        </v-list-item-content>
      </v-list-item>

      <v-divider class="py-2"></v-divider>

      <v-list-item link @click="Setting()">
        <font-awesome-icon size="lg" icon="cog" />
        <v-list-item-content class="px-3">
          <h4>ตั้งค่า</h4>
        </v-list-item-content>
      </v-list-item>

      <v-list-item link @click="SettingUser()">
        <font-awesome-icon size="lg" icon="users-cog" />
        <v-list-item-content class="px-3">
          <h4>จัดการผู้ใช้</h4>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <template v-slot:append>
      <div class="pa-2">
        <v-btn block @click="Logout()">Logout</v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPills } from "@fortawesome/free-solid-svg-icons";
import { faSyringe } from "@fortawesome/free-solid-svg-icons";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { faTable } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faUsersCog } from "@fortawesome/free-solid-svg-icons";
import jwt from "jsonwebtoken";
import router from "../router";
export default {
  data() {
    return {
      drawer: true,
      syringe: faSyringe,
      token: this.$cookies.get("token"),
      decode: ""
    };
  },
  components: {
    FontAwesomeIcon
  },

  mounted() {
    this.decode = jwt.decode(this.token);

    library.add(faPills);
    library.add(faSyringe);
    library.add(faClipboardList);
    library.add(faTable);
    library.add(faCog);
    library.add(faUsersCog);
  },
  methods: {
    Logout() {
      router.push({ name: "Login" });
      this.$cookies.remove("token");
    },
    Dashbord() {
      router.push({ name: "Home" });
    },
    Medical() {
      router.push({ name: "Medical" });
    },
    OrderMedical() {
      router.push({ name: "OrderMedical" });
    },
    Equipment() {
      router.push({ name: "Equipment" });
    },
    OrderEquipment() {
      router.push({ name: "OrderEquipment" });
    },
    PatientInfo() {
      router.push({ name: "PatientInfo" });
    },
    Schedule() {
      router.push({ name: "Schedule" });
    },
    Setting() {
      router.push({ name: "Setting" });
    },
    SettingUser() {
      router.push({ name: "SettingUser" });
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Prompt&display=swap");

.font {
  font: "Prompt";
}
</style>