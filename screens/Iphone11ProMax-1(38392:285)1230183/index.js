import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_33_696}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5d5/dc68/9e73995edb38fe15959d01d06a08a84f"
          }}
          style={styles.ImageBackground_896_287}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/811d/080a/d84e7b1487a608f9b175a330adff2ccd"
          }}
          style={styles.ImageBackground_896_286}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed02/dd13/00af6b5fd98fa9827e54a6c2aa8423a6"
          }}
          style={styles.ImageBackground_38390_299}
        />
        <View style={styles.View_38390_301}>
          <Text style={styles.Text_38390_301}>
            Hi Everyone ! I am Peshal Sedhai. This is just my test site to
            monitor my work while I work on my projects.
          </Text>
        </View>
        <View style={styles.View_38389_7}>
          <Text style={styles.Text_38389_7}>Crash Peshal</Text>
        </View>
        <View style={styles.View_38390_302}>
          <View style={styles.View_I38390_302_70_1758} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adc8/7321/3469a69922cda212d53a546da6081d08"
            }}
            style={styles.ImageBackground_I38390_302_70_1762}
          />
        </View>
        <View style={styles.View_38390_308}>
          <Text style={styles.Text_38390_308}>Search</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3af3/3d8a/4c3f48a5ed9e02b9b2de4e3956cfe529"
          }}
          style={styles.ImageBackground_102_315}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/499a/f91c/d174898cb97b5c77b1c9b04a5fd5fb94"
          }}
          style={styles.ImageBackground_102_316}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_33_696: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("122.40437158469946%"),
    minHeight: hp("122.40437158469946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(162, 89, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_896_287: {
    flexGrow: 1,
    width: wp("256.7632850241546%"),
    height: hp("128.96174863387978%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-68.35748792270532%"),
    top: hp("-34.15300546448087%")
  },
  ImageBackground_896_286: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("79.78142076502732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("42.62295081967213%")
  },
  ImageBackground_38390_299: {
    flexGrow: 1,
    width: wp("31.40096618357488%"),
    height: hp("17.759562841530055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.15942028985507%"),
    top: hp("46.44808743169399%"),
    borderColor: "rgba(200, 200, 200, 1)",
    borderWidth: 5,
    borderTopLeftRadius: 169,
    borderTopRightRadius: 169,
    borderBottomLeftRadius: 169,
    borderBottomRightRadius: 169
  },
  View_38390_301: {
    flexGrow: 1,
    width: wp("85.74879227053141%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874397%"),
    top: hp("64.34426229508196%")
  },
  Text_38390_301: {
    color: "rgba(105, 105, 105, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_38389_7: {
    flexGrow: 1,
    width: wp("148.30917874396135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-24.154589371980677%"),
    top: hp("66.12021857923497%")
  },
  Text_38389_7: {
    color: "rgba(162, 89, 255, 1)",
    fontSize: 37,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.69,
    textTransform: "none"
  },
  View_38390_302: {
    flexGrow: 1,
    width: wp("83.57487922705315%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.212560386473431%"),
    top: hp("4.508196721311475%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I38390_302_70_1758: {
    flexGrow: 1,
    width: wp("83.57487922705315%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(217, 208, 227, 1)",
    borderWidth: 1.0000001192092896,
    borderTopLeftRadius: 41,
    borderTopRightRadius: 41,
    borderBottomLeftRadius: 41,
    borderBottomRightRadius: 41
  },
  ImageBackground_I38390_302_70_1762: {
    flexGrow: 1,
    width: wp("5.363093482123481%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.916175436858394%"),
    top: hp("1.5027322404371581%")
  },
  View_38390_308: {
    flexGrow: 1,
    width: wp("81.64251207729468%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.705314009661837%"),
    top: hp("6.0109289617486334%")
  },
  Text_38390_308: {
    color: "rgba(156, 156, 156, 1)",
    fontSize: 19,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  ImageBackground_102_315: {
    flexGrow: 1,
    width: wp("6.702898550724639%"),
    height: hp("4.212204354708312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.179951690821255%"),
    top: hp("115.5851437094433%")
  },
  ImageBackground_102_316: {
    flexGrow: 1,
    width: wp("2.2342995169082123%"),
    height: hp("2.1061026984876623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.414251207729464%"),
    top: hp("117.69125683060109%")
  },
  View_2: { height: 896 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
